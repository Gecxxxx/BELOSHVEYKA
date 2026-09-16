import React from 'react';
import {ArrowRight} from '@phosphor-icons/react';
import {imageMeta} from '../image-data';
export const asset=n=>'/assets/'+n+'.webp';
export function Button({href='/how-to-order/#request',children='Рассчитать заказ',dark=false,outline=false,...props}){return <a className={'button '+(dark?'black ':'')+(outline?'outline':'')} href={href} {...props}>{children}<ArrowRight size={22} weight="light"/></a>}
export function Label({children}){return <div className="eyebrow">{children}</div>}
export function Photo({name='real/workwear',alt='',className='',eager=false,...props}){return <img className={className} width={imageMeta[name]?.width} height={imageMeta[name]?.height} src={asset(name)} srcSet={imageMeta[name]?`${asset(name+'-small')} ${imageMeta[name].smallWidth}w, ${asset(name)} ${imageMeta[name].width}w`:undefined} sizes="(max-width: 800px) 100vw, 50vw" alt={alt} loading={eager?'eager':'lazy'} decoding="async" {...props}/>}
export function PageHero({label,title,description,image='real/workwear',action=true}){return <section className="page-hero"><Photo name={image} alt="Одежда и материалы из фотосъёмки Белошвейки" eager/><div><a className="breadcrumb" href="/">Главная /</a><Label>{label}</Label><h1>{title}</h1><p>{description}</p>{action&&<Button/>}</div></section>}
export const money=n=>new Intl.NumberFormat('ru-RU',{style:'currency',currency:'RUB',maximumFractionDigits:0}).format(n);
