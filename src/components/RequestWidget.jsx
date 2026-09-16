import React, {useEffect, useState} from 'react';
import {NotePencil} from '@phosphor-icons/react';
import './request-widget.css';

export default function RequestWidget({path}) {
  const [localForm, setLocalForm] = useState(false);
  useEffect(() => { setLocalForm(Boolean(document.getElementById('request'))); }, [path]);

  function goToForm(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const form = document.getElementById('request');
    if (!form) return;
    event.preventDefault();
    if (window.location.hash !== '#request') window.history.pushState(null, '', '#request');
    form.setAttribute('tabindex', '-1');
    form.focus({preventScroll: true});
    form.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start'});
  }

  return <a className="request-widget" href={localForm ? '#request' : '/how-to-order/#request'} onClick={goToForm} aria-label="Оставить заявку">
    <NotePencil size={26} weight="regular" aria-hidden="true"/>
    <span className="request-widget-tooltip" aria-hidden="true">Оставить заявку</span>
  </a>;
}
