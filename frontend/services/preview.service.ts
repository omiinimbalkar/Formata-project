// Preview data interfaces

export interface PreviewData {
  records: Array<Record<string, any>>;
  metadata?: {
    columns: string[];
    rowCount: number;
    totalRows?: number;
    fileType?: string;
    converted?: boolean;
  };
}

export interface FilterParams {
  [column: string]: {
    op: string;
    value?: any;
    min?: any;
    max?: any;
    start?: any;
    end?: any;
  };
}


