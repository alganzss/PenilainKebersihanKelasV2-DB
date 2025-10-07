import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Endpoint untuk menyimpan laporan penilaian
app.post('/make-server-53beb880/save-report', async (c) => {
  try {
    const body = await c.req.json();
    const { kelas, tanggal, totalSkor, kategori, detailPenilaian, timestamp } = body;

    if (!kelas || !tanggal || totalSkor === undefined) {
      return c.json({ error: 'Data tidak lengkap' }, 400);
    }

    // Generate unique ID untuk laporan
    const reportId = `report_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Simpan data laporan ke KV store
    const reportData = {
      id: reportId,
      kelas,
      tanggal,
      totalSkor,
      kategori,
      detailPenilaian,
      timestamp: timestamp || new Date().toISOString(),
    };

    await kv.set(reportId, reportData);

    // Simpan juga ke index berdasarkan kelas untuk memudahkan pencarian
    const kelasKey = `class_${kelas.replace(/\s/g, '_')}_reports`;
    const existingReports = await kv.get(kelasKey) || [];
    existingReports.push(reportId);
    await kv.set(kelasKey, existingReports);

    console.log(`Laporan berhasil disimpan: ${reportId} untuk kelas ${kelas}`);

    return c.json({
      success: true,
      message: 'Laporan berhasil disimpan',
      reportId,
      data: reportData
    });
  } catch (error) {
    console.error('Error saat menyimpan laporan:', error);
    return c.json({ error: 'Gagal menyimpan laporan', details: error.message }, 500);
  }
});

// Endpoint untuk mendapatkan semua laporan
app.get('/make-server-53beb880/reports', async (c) => {
  try {
    const reports = await kv.getByPrefix('report_');
    
    // Sort by timestamp descending (terbaru dulu)
    reports.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return c.json({
      success: true,
      reports,
      total: reports.length
    });
  } catch (error) {
    console.error('Error saat mengambil laporan:', error);
    return c.json({ error: 'Gagal mengambil laporan', details: error.message }, 500);
  }
});

// Endpoint untuk mendapatkan laporan berdasarkan kelas
app.get('/make-server-53beb880/reports/:kelas', async (c) => {
  try {
    const kelas = c.req.param('kelas');
    const kelasKey = `class_${kelas.replace(/\s/g, '_')}_reports`;
    
    const reportIds = await kv.get(kelasKey) || [];
    
    if (reportIds.length === 0) {
      return c.json({
        success: true,
        reports: [],
        message: `Tidak ada laporan untuk kelas ${kelas}`
      });
    }

    const reports = await kv.mget(reportIds);
    
    // Sort by timestamp descending
    reports.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return c.json({
      success: true,
      reports,
      total: reports.length
    });
  } catch (error) {
    console.error('Error saat mengambil laporan kelas:', error);
    return c.json({ error: 'Gagal mengambil laporan kelas', details: error.message }, 500);
  }
});

// Endpoint untuk mendapatkan satu laporan berdasarkan ID
app.get('/make-server-53beb880/report/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const report = await kv.get(id);

    if (!report) {
      return c.json({ error: 'Laporan tidak ditemukan' }, 404);
    }

    return c.json({
      success: true,
      report
    });
  } catch (error) {
    console.error('Error saat mengambil detail laporan:', error);
    return c.json({ error: 'Gagal mengambil detail laporan', details: error.message }, 500);
  }
});

// Endpoint untuk menghapus laporan
app.delete('/make-server-53beb880/report/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const report = await kv.get(id);

    if (!report) {
      return c.json({ error: 'Laporan tidak ditemukan' }, 404);
    }

    // Hapus dari index kelas
    const kelasKey = `class_${report.kelas.replace(/\s/g, '_')}_reports`;
    const existingReports = await kv.get(kelasKey) || [];
    const updatedReports = existingReports.filter((rid: string) => rid !== id);
    await kv.set(kelasKey, updatedReports);

    // Hapus laporan
    await kv.del(id);

    console.log(`Laporan berhasil dihapus: ${id}`);

    return c.json({
      success: true,
      message: 'Laporan berhasil dihapus'
    });
  } catch (error) {
    console.error('Error saat menghapus laporan:', error);
    return c.json({ error: 'Gagal menghapus laporan', details: error.message }, 500);
  }
});

// Health check endpoint
app.get('/make-server-53beb880/health', (c) => {
  return c.json({ status: 'OK', service: 'Penilaian Kebersihan Kelas' });
});

Deno.serve(app.fetch);
