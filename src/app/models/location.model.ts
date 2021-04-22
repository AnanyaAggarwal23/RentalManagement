import { Branch } from './branch.model';

export interface Location {
  dealers_id: string;
  opco: string;
  name: string;
  branches: Branch[];
}
