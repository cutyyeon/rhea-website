// RHEA — site behavior
// Beginner note: this file is small on purpose. Each block below does one job.

(function () {
  "use strict";

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
      if (isOpen) {
        mobileNav.setAttribute("hidden", "");
      } else {
        mobileNav.removeAttribute("hidden");
      }
    });
    // Close the mobile menu after a link is chosen.
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.setAttribute("hidden", "");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Scroll reveal (blueprint lines draw in once, when scrolled into view) ----
  var revealRoots = document.querySelectorAll("[data-reveal-root]");
  if ("IntersectionObserver" in window && revealRoots.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealRoots.forEach(function (root) {
      // The header is always visible on load; skip observing it.
      if (root.classList.contains("site-header")) {
        root.classList.add("is-visible");
        return;
      }
      // Content is visible by default in CSS. Only now, with JS confirmed
      // running, do we opt this root into the hide-then-reveal treatment —
      // so a script error or blocked script never leaves content hidden.
      root.classList.add("js-reveal");
      observer.observe(root);
    });
  } else {
    // No IntersectionObserver support: show everything immediately.
    revealRoots.forEach(function (root) { root.classList.add("is-visible"); });
  }

  // ---- Stat count-up ----
  // Lands the key numbers once as the spec section enters. The final value
  // is already in the HTML, so no-JS and reduced-motion visitors see it as-is.
  var counters = document.querySelectorAll("[data-count]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (counters.length && !reduceMotion && "IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countObserver.unobserve(entry.target);
        var el = entry.target;
        var target = Number(el.getAttribute("data-count"));
        var start = null;
        var duration = 1200;
        function tick(now) {
          if (start === null) start = now;
          var t = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased).toLocaleString("en-US");
          if (t < 1) requestAnimationFrame(tick);
        }
        el.textContent = "0";
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { countObserver.observe(el); });
  }

  // ---- Contact form ----
  // PLACEHOLDER: this only validates and shows a local status message.
  // To actually receive submissions, connect this form to a backend —
  // e.g. Formspree (https://formspree.io), a Google Form, or your own server —
  // and replace the fetch/console.log block below with the real call.
  var form = document.getElementById("contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        form.reportValidity();
        return;
      }

      var data = Object.fromEntries(new FormData(form).entries());
      // Replace this with a real submission (see PLACEHOLDER note above).
      console.log("Rhea contact form submission (not yet sent anywhere):", data);

      if (status) {
        status.textContent = "요청이 접수되었습니다. (현재는 화면 동작만 구현되어 있으며, 실제 전송을 위해서는 폼 연동이 필요합니다.)";
        status.setAttribute("data-state", "success");
      }
      form.reset();
    });
  }
})();
