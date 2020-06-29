
import {
    TableRef
} from './consts';

export default function (editor, opt = {}) {

    const c = opt;
  const bm = editor.BlockManager;   
bm.remove(TableRef);
    bm.add(TableRef, {
      label: 'Tabel',
      category: c.blockLabel,
      attributes: { class: 'fa fa-table' },
      content: `
        <div data-gjs-type="${TableRef}"></div>
      `
    });
  
}
