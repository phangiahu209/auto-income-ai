const $ = (id) => document.getElementById(id);
const money = n => new Intl.NumberFormat('vi-VN').format(n) + ' ₫';
let incomes = JSON.parse(localStorage.getItem('aia_incomes') || '[]');
let plans = JSON.parse(localStorage.getItem('aia_plans') || '[]');

function renderIncome(){
  const total = incomes.reduce((s,x)=>s+x.amount,0);
  $('totalIncome').textContent = money(total);
  $('heroRevenue').textContent = money(total);
  $('incomeList').innerHTML = incomes.length ? incomes.slice().reverse().map(x =>
    `<div class="income-row"><span>${escapeHtml(x.source)} · ${escapeHtml(x.date)}</span><b>${money(x.amount)}</b></div>`
  ).join('') : '<p class="empty">Chưa có khoản thu nào.</p>';
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderPlans(){$('plannedCount').textContent=plans.length;}
$('incomeForm').addEventListener('submit',e=>{
  e.preventDefault();
  const amount=Number($('amount').value);
  if(!Number.isFinite(amount)||amount<=0)return;
  incomes.push({source:$('source').value,amount,date:$('incomeDate').value});
  localStorage.setItem('aia_incomes',JSON.stringify(incomes));
  $('amount').value='';renderIncome();
});
$('clearIncome').addEventListener('click',()=>{
  if(confirm('Bạn có chắc muốn xóa toàn bộ khoản thu đã lưu trên thiết bị này?')){
    incomes=[];localStorage.setItem('aia_incomes','[]');renderIncome();
  }
});
$('generate').addEventListener('click',()=>{
  const topic=$('topic').value.trim();
  if(!topic){$('draft').textContent='Hãy nhập chủ đề trước nhé.';return;}
  const type=$('format').value;
  const opening=type==='social'?'Mở đầu thu hút: Nêu một câu hỏi hoặc tình huống gần gũi về':'Giới thiệu: Vì sao chủ đề này đáng quan tâm?';
  const middle=type==='list'?'Các ý chính:\\n1. Mẹo hoặc thông tin đầu tiên\\n2. Mẹo hoặc thông tin thứ hai\\n3. Ví dụ thực tế\\n4. Lưu ý quan trọng':'Các phần chính:\\n1. Giải thích khái niệm hoặc bối cảnh\\n2. Trình bày 3 ý quan trọng\\n3. Đưa ví dụ cụ thể, có kiểm chứng\\n4. Nêu lưu ý hoặc nguồn tham khảo';
  const ending=type==='social'?'Kết thúc: Mời người đọc chia sẻ trải nghiệm hoặc đặt câu hỏi.':'Kết luận: Tóm tắt giá trị chính và gợi ý bước tiếp theo.';
  const draft=`CHỦ ĐỀ: ${topic}\\n\\n${opening} ${topic}.\\n\\n${middle}\\n\\n${ending}\\n\\nGHI NHỚ: Kiểm tra thông tin, bổ sung nguồn đáng tin cậy và chỉnh sửa bằng giọng văn của bạn trước khi đăng.`;
  $('draft').textContent=draft;
  plans.push({topic,created:new Date().toISOString()});
  localStorage.setItem('aia_plans',JSON.stringify(plans));renderPlans();
});
$('copyDraft').addEventListener('click',async()=>{
  const value=$('draft').textContent;
  try{await navigator.clipboard.writeText(value);$('copyDraft').textContent='Đã sao chép';setTimeout(()=>$('copyDraft').textContent='Sao chép dàn ý',1600);}
  catch(e){$('copyDraft').textContent='Không sao chép được';}
});
renderIncome();renderPlans();
