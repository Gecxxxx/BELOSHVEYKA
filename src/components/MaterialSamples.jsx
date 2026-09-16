import React, {useRef, useState} from 'react';
import {ArrowUpRight, X} from '@phosphor-icons/react';
import {Photo} from './common';

const samples = [
  {image: 'real/detail', name: 'Твил «Барьер»', note: 'Тёмно-синий образец', tone: '#283d50', angle: '-3deg'},
  {image: 'real/fabric-blue', name: 'Грета «Заря»', note: 'Синий образец', tone: '#265c8a', angle: '2deg'},
  {image: 'real/apparel', name: 'Грета ВО/МВО', note: 'Образец с пропиткой', tone: '#254e8b', angle: '-2deg'},
];

export default function MaterialSamples() {
  const dialog = useRef(null);
  const [selected, setSelected] = useState(samples[0]);
  function open(sample) { setSelected(sample); dialog.current.showModal(); }
  function tilt(event) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const stage = event.currentTarget;
    const rect = stage.getBoundingClientRect();
    const x = Math.max(-.5, Math.min(.5, (event.clientX - rect.left) / rect.width - .5));
    const y = Math.max(-.5, Math.min(.5, (event.clientY - rect.top) / rect.height - .5));
    stage.style.setProperty('--rx', `${-y * 9}deg`);
    stage.style.setProperty('--ry', `${x * 9}deg`);
  }
  function reset(event) {
    event.currentTarget.style.removeProperty('--rx');
    event.currentTarget.style.removeProperty('--ry');
  }
  return <>
    <div className="material-samples">
      {samples.map((sample, index) => <figure className="fabric-sample" key={sample.image} style={{'--fabric-tone': sample.tone, '--rest-angle': sample.angle}}>
        <div className="fabric-stage" onPointerMove={tilt} onPointerLeave={reset} onPointerCancel={reset}>
          <button className="fabric-object" type="button" onClick={() => open(sample)} aria-label={`Рассмотреть ткань: ${sample.name}`} aria-haspopup="dialog">
            <span className="fabric-layer fabric-layer-back" aria-hidden="true"/>
            <span className="fabric-layer fabric-layer-middle" aria-hidden="true"/>
            <span className="fabric-face"><Photo name={sample.image} alt={`${sample.name} — исходная фотография с этикеткой`} sizes="(max-width: 600px) 90vw, 33vw"/></span>
          </button>
        </div>
        <figcaption><div><small>0{index + 1} / {sample.note}</small><h3>{sample.name}</h3></div><ArrowUpRight size={22} aria-hidden="true"/></figcaption>
      </figure>)}
    </div>
    <p className="materials-hint">Нажмите на образец, чтобы рассмотреть ткань и этикетку.</p>
    <dialog className="fabric-dialog" ref={dialog} aria-labelledby="fabric-dialog-title" onClick={event => {if (event.target === event.currentTarget) dialog.current.close();}}>
      <div className="fabric-dialog-content">
        <div className="fabric-dialog-heading"><h2 id="fabric-dialog-title">{selected.name}</h2><button type="button" onClick={() => dialog.current.close()} aria-label="Закрыть образец" autoFocus><X size={24}/></button></div>
        <Photo name={selected.image} alt={`${selected.name}: оригинальный образец и все надписи на этикетке`} sizes="90vw"/>
        <p>Оригинальная фотография образца. Характеристики ткани согласуем для вашего изделия.</p>
      </div>
    </dialog>
  </>;
}
