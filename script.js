// 다크모드 버튼
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "Light";
  } else {
    themeToggle.textContent = "Dark";
  }
});

// 프로젝트 카테고리 필터
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach(function (item) {
      item.classList.remove("active");
    });
    button.classList.add("active");

    projectCards.forEach(function (card) {
      const projectCategory = card.dataset.category;

      if (selectedCategory === "all" || selectedCategory === projectCategory) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// 이메일 복사 버튼
const copyEmailButton = document.querySelector("#copyEmailButton");
const emailText = document.querySelector("#emailText");

copyEmailButton.addEventListener("click", function () {
  const email = emailText.textContent;

  navigator.clipboard.writeText(email).then(function () {
    copyEmailButton.textContent = "복사 완료!";

    setTimeout(function () {
      copyEmailButton.textContent = "이메일 복사";
    }, 1600);
  });
});

// 연락 폼: 입력한 내용으로 이메일 작성 화면 열기
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#nameInput").value;
  const senderEmail = document.querySelector("#emailInput").value;
  const message = document.querySelector("#messageInput").value;
  const subject = encodeURIComponent("[Portfolio] 연락 메시지");
  const body = encodeURIComponent(
    "이름: " + name + "\n" +
    "이메일: " + senderEmail + "\n\n" +
    message
  );

  window.location.href = "mailto:zern35@gmail.com?subject=" + subject + "&body=" + body;
  formMessage.textContent = "이메일 작성 화면을 열었습니다.";
});
