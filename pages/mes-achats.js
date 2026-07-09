import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';
import PhotoThumb from '../components/PhotoThumb';

export default function MesAchats() {
  const [orders, setOrders] = useState(null);
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { window.location.href = '/login?next=/mes-achats'; return; }

      const { data, error } = await supabase
        .from('orders')
        .select('id, status, total, created_at, order_items ( id, format, price, photo_id, photos ( title, thumbnail_path ) )')
        .eq('status', 'paid')
        .order('created_at', { ascending: false });

      setOrders(data || []);
    }
    load();
  }, []);

  function thumbUrl(path) {
    const { data } = supabase.storage.from('thumbnails').getPublicUrl(path);
    return data.publicUrl;
  }

  async function handleDownload(itemId) {
    setDownloading(itemId);
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch(`/api/download?item_id=${itemId}`, {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });
    const data = await res.json();
    setDownloading(null);
    if (data.url) {
