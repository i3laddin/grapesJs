
import {
    ChartRef
} from './consts';

export default function (editor, opt = {}) {

    const c = opt;
  const bm = editor.BlockManager;   
bm.remove(ChartRef);
    bm.add(ChartRef, {
      label: 'Chart',
      category: c.blockLabel,
      attributes: { class: 'fa fa-line-chart' },
      content: `
        <div style="width: 30vw;" data-gjs-type="${ChartRef}"></div>
      `
    });
  
}
