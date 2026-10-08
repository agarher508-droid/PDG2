let currentFilter='all';
function togglePlan(btn){
 const card=btn.closest('.plan-card');
 const open=card.classList.toggle('open');
 btn.setAttribute('aria-expanded',open?'true':'false');
}
function setFilter(filter,btn){
 currentFilter=filter;
 document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
 btn.classList.add('active');
 filterPlans();
}
function filterPlans(){
 const q=document.getElementById('search').value.toLowerCase().trim();
 let visible=0;
 document.querySelectorAll('.plan-card').forEach(card=>{
   const okFilter=currentFilter==='all'||card.dataset.category===currentFilter;
   const okSearch=!q||card.dataset.search.includes(q)||card.innerText.toLowerCase().includes(q);
   card.style.display=(okFilter&&okSearch)?'block':'none';
   if(okFilter&&okSearch) visible++;
 });
 document.getElementById('empty').style.display=visible?'none':'block';
}
function copySection(btn){
 const card=btn.closest('.plan-card');
 navigator.clipboard?.writeText(location.href.split('#')[0]+'#'+card.id);
 btn.textContent='✓ Referencia copiada';
 setTimeout(()=>btn.textContent='🔗 Copiar referencia',1200);
}
