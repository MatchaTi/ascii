import News from '@/components/ui/news';

export default function NewsPage() {
	return (
		<div className='space-y-32 py-32'>
			<title>
				Berita Terbaru Asisten Laboratorium Informatika | ASCII
			</title>
			<meta
				name='description'
				content='Dapatkan informasi terbaru seputar praktikum, termasuk pengumuman, berita, dan update penting lainnya.'
			/>

			<News />
		</div>
	);
}
