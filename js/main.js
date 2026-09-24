// MR Solution (Rhea, Phoenix) — site behavior
// Beginner note: this file is small on purpose. Each block below does one job.

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var params = new URLSearchParams(window.location.search);

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Mobile nav toggle ----
  var navToggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "메뉴 열기" : "메뉴 닫기");
      if (isOpen) mobileNav.setAttribute("hidden", "");
      else mobileNav.removeAttribute("hidden");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.setAttribute("hidden", "");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "메뉴 열기");
      });
    });
  }

  // ---- Hero carousel: Rhea / Phoenix rotation ----
  // Autoplays every 7s (the progress bar in CSS uses the same length).
  // Pauses while hovered or focused, stops for good when the visitor presses
  // pause, and never autoplays under prefers-reduced-motion.
  var stage = document.querySelector(".hero-stage");
  if (stage) {
    var slides = stage.querySelectorAll(".slide");
    var dots = stage.querySelectorAll(".carousel-dot");
    var pauseBtn = stage.querySelector("[data-carousel='toggle']");
    var INTERVAL = 7000;
    var current = 0;
    var timer = null;
    var userPaused = reduceMotion;
    var hovering = false;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        var active = i === current;
        slide.classList.toggle("is-active", active);
        if (active) slide.removeAttribute("hidden");
        else slide.setAttribute("hidden", "");
      });
      dots.forEach(function (dot, i) {
        // Re-inserting the fill restarts its CSS progress animation.
        var fill = dot.querySelector(".dot-fill");
        if (fill) dot.replaceChild(fill.cloneNode(true), fill);
        if (i === current) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      schedule();
    }

    function schedule() {
      clearTimeout(timer);
      var playing = !userPaused && !hovering;
      stage.classList.toggle("is-playing", !userPaused);
      stage.classList.toggle("is-paused", userPaused || hovering);
      if (playing) timer = setTimeout(function () { show(current + 1); }, INTERVAL);
    }

    stage.querySelector("[data-carousel='prev']").addEventListener("click", function () { show(current - 1); });
    stage.querySelector("[data-carousel='next']").addEventListener("click", function () { show(current + 1); });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () { show(Number(dot.getAttribute("data-carousel-to"))); });
    });
    pauseBtn.addEventListener("click", function () {
      userPaused = !userPaused;
      pauseBtn.setAttribute("aria-pressed", String(userPaused));
      pauseBtn.setAttribute("aria-label", userPaused ? "자동 넘김 재생" : "자동 넘김 멈춤");
      schedule();
    });
    // Hover or keyboard focus inside the stage holds the current slide.
    stage.addEventListener("mouseenter", function () { hovering = true; schedule(); });
    stage.addEventListener("mouseleave", function () { hovering = false; schedule(); });
    stage.addEventListener("focusin", function () { hovering = true; schedule(); });
    stage.addEventListener("focusout", function (e) {
      if (!stage.contains(e.relatedTarget)) { hovering = false; schedule(); }
    });
    // Arrow keys move between products while focus is in the carousel.
    stage.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { show(current + 1); }
      if (e.key === "ArrowLeft") { show(current - 1); }
    });

    if (reduceMotion) {
      pauseBtn.setAttribute("aria-pressed", "true");
      pauseBtn.setAttribute("aria-label", "자동 넘김 재생");
    }
    show(params.get("product") === "phoenix" ? 1 : 0);
  }

  // ---- Product tabs, state kept in ?product= ----
  var tabs = document.querySelectorAll(".tab");
  var productSelect = document.getElementById("product");

  function selectProduct(name, moveFocus) {
    var found = false;
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("data-product") === name;
      if (on) found = true;
      tab.setAttribute("aria-selected", String(on));
      tab.setAttribute("tabindex", on ? "0" : "-1");
      var panel = document.getElementById(tab.getAttribute("aria-controls"));
      if (panel) {
        if (on) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      }
      if (on && moveFocus) tab.focus();
    });
    if (!found) return;
    var url = new URL(window.location.href);
    url.searchParams.set("product", name);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
    if (productSelect) productSelect.value = name;
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { selectProduct(tab.getAttribute("data-product"), false); });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (next) { e.preventDefault(); selectProduct(next.getAttribute("data-product"), true); }
    });
  });

  // "자세히 보기" links: open the right tab, then let the #products jump happen.
  document.querySelectorAll("[data-product-link]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      selectProduct(link.getAttribute("data-product-link"), false);
      document.getElementById("products").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  if (params.get("product")) selectProduct(params.get("product"), false);

  // Document cards prefill what the visitor is asking for.
  var topicText = { catalog: "제품 카탈로그를 요청합니다.", license: "인허가 문서를 요청합니다.", demo: "견적과 시연을 요청합니다." };
  var messageEl = document.getElementById("message");
  document.querySelectorAll("[data-topic]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (messageEl && !messageEl.value) messageEl.value = topicText[link.getAttribute("data-topic")] || "";
      document.getElementById("contact").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      var org = document.getElementById("org");
      if (org) org.focus({ preventScroll: true });
    });
  });

  // ---- Contact form ----
  // PLACEHOLDER: this only validates and shows a local status message.
  // To actually receive submissions, connect this form to a backend (e.g.
  // Formspree, a Google Form, or your own server) and replace the
  // console.log block below with the real call.
  var form = document.getElementById("contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var fields = form.querySelectorAll("input, textarea");
    var isDirty = false;

    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        isDirty = true;
        if (field.hasAttribute("aria-invalid")) {
          field.setAttribute("aria-invalid", String(!field.checkValidity()));
        }
      });
    });

    window.addEventListener("beforeunload", function (event) {
      if (!isDirty) return;
      event.preventDefault();
      event.returnValue = "";
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        fields.forEach(function (field) {
          field.setAttribute("aria-invalid", String(!field.checkValidity()));
        });
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var data = Object.fromEntries(new FormData(form).entries());
      console.log("Contact form submission (not yet sent anywhere):", data);

      if (status) {
        status.textContent = "요청이 접수되었습니다. (현재는 화면 동작만 구현되어 있으며, 실제 전송을 위해서는 폼 연동이 필요합니다.)";
        status.setAttribute("data-state", "success");
      }
      form.reset();
      form.classList.remove("was-validated");
      fields.forEach(function (field) { field.removeAttribute("aria-invalid"); });
      isDirty = false;
    });
  }
})();
