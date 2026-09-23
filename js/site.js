(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');

  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      menu.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1000) closeMenu();
    });
  }

  const inquiryForm = document.querySelector('form[name="project-inquiry"]');
  if (inquiryForm) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('interest');
    const plan = params.get('plan');
    const typeByInterest = { restaurant: 'type-restaurant', enterprise: 'type-enterprise' };
    const typeByPlan = { essential: 'type-presence', professional: 'type-presence', complete: 'type-presence' };
    const selectedType = document.getElementById(typeByInterest[type] || typeByPlan[plan] || '');
    if (selectedType) selectedType.checked = true;

    if (type === 'hosting' || type === 'growth') {
      const checkboxValue = type === 'hosting' ? 'Support and hosting' : 'SEO';
      const checkbox = [...inquiryForm.querySelectorAll('input[name="monthly_interest"]')]
        .find((input) => input.value === checkboxValue);
      if (checkbox) checkbox.checked = true;
    }

    if (plan) {
      const planField = document.createElement('input');
      planField.type = 'hidden';
      planField.name = 'presence_plan';
      planField.value = plan;
      inquiryForm.append(planField);
    }
  }
})();
