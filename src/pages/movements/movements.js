import { history } from '../../core/router';
import { getMovements, getAccount } from './movements.api';
import { addMovementRows } from './movements.helpers';
import {
  mapAccountFromApiToViewModel,
  mapMovementsListFromApiToViewModelById,
} from './movements.mapper';
import { onSetValues } from '../../common/helpers';

const params = history.getParams();

getMovements()
.then((movements) => {
  addMovementRows(mapMovementsListFromApiToViewModelById(params.id, movements));
})
.catch(error => console.log(error));

getAccount(params.id).then((account) => {
  onSetValues(mapAccountFromApiToViewModel(account));
})
.catch(error => console.log(error));
