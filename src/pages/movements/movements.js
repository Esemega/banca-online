import { history } from '../../core/router';
import { getMovements, getAccount } from './movements.api';
import { addMovementRows } from './movements.helpers';
import {
  mapAccountFromApiToViewModel,
  mapMovementsListFromApiToViewModelById,
} from './movements.mapper';
import { onSetValues } from '../../common/helpers';

const { id } = history.getParams();
const hasId = Boolean(id);

if (hasId) {
  getMovements(id).then((movements) => {
    addMovementRows(mapMovementsListFromApiToViewModelById(movements));
  });

  getAccount(id).then((account) => {
    onSetValues(mapAccountFromApiToViewModel(account));
  });
}
