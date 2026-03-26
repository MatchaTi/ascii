import type { Schedule } from '@/schemas/schedule';

// ramadhan
// export function getTimeFromSchedule(time: string) {
// 	switch (time) {
// 		case '08:00 - 09:10':
// 			return 1;
// 		case '09:20 - 10:30':
// 			return 2;
// 		case '10:40 - 11:50':
// 			return 3;
// 		case '12:40 - 13:45':
// 		case '13:30 - 14:40':
// 			return 4;
// 		case '13:50 - 15:00':
// 		case '14:50 - 16:00':
// 			return 5;
// 		default:
// 			return 0;
// 	}
// }

export function getTimeFromSchedule(time: string) {
	switch (time) {
		case '07:30 - 09:00':
			return 1;
		case '09:10 - 10:40':
			return 2;
		case '10:50 - 12:20':
			return 3;
		case '13:00 - 14:30':
		case '13:30 - 15:00':
			return 4;
		case '14:40 - 16:10':
		case '15:10 - 16:30':
			return 5;
		case '16:20 - 17:50':
		case '16:40 - 17:50':
			return 6;
		default:
			return 0;
	}
}

export function mapToScheduleFormat(rawSchedule: Schedule[]) {
	const mappedSchedule = rawSchedule.map((schedule) => {
		const day = schedule.Hari;
		const timeRaw = schedule.Jam;
		const time = getTimeFromSchedule(timeRaw);

		return {
			class: schedule['Kode Kelas'],
			course: schedule['Mata Kuliah'],
			time,
			day,
			location: schedule.Tempat,
		};
	});

	return mappedSchedule;
}
