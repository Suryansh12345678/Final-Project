
export interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent';
  subject: string;
}

export interface StudentData {
  name: string;
  id: string;
  attendance: {
    percentage: number;
    present: number;
    absent: number;
    total: number;
    history: AttendanceRecord[];
  };
  assignments: {
    completed: number;
    pending: number;
  };
  results: {
    subject: string;
    grade: string;
    score: number;
  }[];
  progress: number;
}

export enum AppState {
  LOADING = 'LOADING',
  LOGIN = 'LOGIN',
  TRANSITIONING = 'TRANSITIONING',
  DASHBOARD = 'DASHBOARD'
}
