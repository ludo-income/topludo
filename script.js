const toast = document.getElementById("toast");

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>toast.classList.remove("show"),2200);
}

document.getElementById("playBtn").addEventListener("click",()=>{
  showToast("Ludo Matches খুলছে…");
});

document.getElementById("joinBtn").addEventListener("click",()=>{
  showToast("Telegram link এখানে বসাতে পারবেন");
});

document.getElementById("bellBtn").addEventListener("click",()=>{
  showToast("কোনো নতুন notification নেই");
});

document.getElementById("balanceBtn").addEventListener("click",()=>{
  showToast("Current balance: ৳0");
});

document.querySelectorAll(".switch").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".switch").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    const games = btn.dataset.tab === "games";
    document.getElementById("gamesPanel").classList.toggle("hidden",!games);
    document.getElementById("othersPanel").classList.toggle("hidden",games);
  });
});

document.querySelectorAll(".nav-item").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".nav-item").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    const page = btn.dataset.page;
    if(page==="home") showToast("Home");
    if(page==="refer") showToast("Referral page এখানে যুক্ত করতে পারবেন");
    if(page==="profile") showToast("Profile page এখানে যুক্ত করতে পারবেন");
  });
});
