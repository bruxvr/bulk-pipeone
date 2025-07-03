// Geographic Data
const geographicData = {
  Brasil: {
    SP: ["São Paulo", "Campinas", "Santos", "Ribeirão Preto", "Sorocaba"],
    RJ: [
      "Rio de Janeiro",
      "Niterói",
      "Petrópolis",
      "Nova Iguaçu",
      "Duque de Caxias",
    ],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria"],
    BA: [
      "Salvador",
      "Feira de Santana",
      "Vitória da Conquista",
      "Camaçari",
      "Jequié",
    ],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"],
    SC: ["Florianópolis", "Joinville", "Blumenau", "Chapecó", "Criciúma"],
  },
  "Estados Unidos": {
    CA: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Oakland"],
    NY: ["New York", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
    TX: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth"],
    FL: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"],
  },
  Argentina: {
    "Buenos Aires": [
      "Buenos Aires",
      "La Plata",
      "Mar del Plata",
      "Quilmes",
      "Bahía Blanca",
    ],
    Córdoba: [
      "Córdoba",
      "Villa María",
      "Río Cuarto",
      "San Francisco",
      "Villa Carlos Paz",
    ],
    "Santa Fe": [
      "Rosario",
      "Santa Fe",
      "Rafaela",
      "Venado Tuerto",
      "Reconquista",
    ],
  },
};

// Application Data
const appData = {
  contacts: [
    {
      id: 1,
      name: "Ana Silva",
      email: "ana.silva@email.com",
      phone: "+55 11 99999-1111",
      conversationStatus: "Aberta",
      owner: "João Santos",
      tags: ["Premium", "Interessado"],
      age: 28,
      gender: "Feminino",
      country: "Brasil",
      state: "SP",
      city: "São Paulo",
      rating: 5,
      kanbanList: "Hot Lead",
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      email: "carlos.oliveira@email.com",
      phone: "+55 11 99999-2222",
      conversationStatus: "Em andamento",
      owner: "Maria Costa",
      tags: ["Seguimiento"],
      age: 35,
      gender: "Masculino",
      country: "Brasil",
      state: "RJ",
      city: "Rio de Janeiro",
      rating: 4,
      kanbanList: "Negociação",
    },
    {
      id: 3,
      name: "Beatriz Santos",
      email: "beatriz.santos@email.com",
      phone: "+55 11 99999-3333",
      conversationStatus: "Resolvida",
      owner: "Pedro Lima",
      tags: ["Cliente VIP", "Satisfeito"],
      age: 42,
      gender: "Feminino",
      country: "Brasil",
      state: "MG",
      city: "Belo Horizonte",
      rating: 5,
      kanbanList: "Fechado",
    },
    {
      id: 4,
      name: "Daniel Costa",
      email: "daniel.costa@email.com",
      phone: "+55 11 99999-4444",
      conversationStatus: "Pausada",
      owner: "Ana Rodrigues",
      tags: ["Perdido"],
      age: 31,
      gender: "Masculino",
      country: "Brasil",
      state: "RS",
      city: "Porto Alegre",
      rating: 2,
      kanbanList: "Lead Qualificado",
    },
    {
      id: 5,
      name: "Elena Ferreira",
      email: "elena.ferreira@email.com",
      phone: "+55 11 99999-5555",
      conversationStatus: "Aberta",
      owner: "João Santos",
      tags: ["Novo Lead"],
      age: 26,
      gender: "Feminino",
      country: "Brasil",
      state: "BA",
      city: "Salvador",
      rating: 3,
      kanbanList: "Hot Lead",
    },
    {
      id: 6,
      name: "Roberto Silva",
      email: "roberto.silva@email.com",
      phone: "+55 11 99999-6666",
      conversationStatus: "Andamento",
      owner: "Carlos Mendes",
      tags: ["VIP"],
      age: 38,
      gender: "Masculino",
      country: "Brasil",
      state: "SP",
      city: "Campinas",
      rating: 4,
      kanbanList: "Negociação",
    },
    {
      id: 7,
      name: "Patricia Gomes",
      email: "patricia.gomes@email.com",
      phone: "+55 11 99999-7777",
      conversationStatus: "Resolvida",
      owner: "Lucia Dias",
      tags: ["Satisfeito"],
      age: 45,
      gender: "Feminino",
      country: "Brasil",
      state: "PR",
      city: "Curitiba",
      rating: 5,
      kanbanList: "Fechado",
    },
    {
      id: 8,
      name: "Fernando Lima",
      email: "fernando.lima@email.com",
      phone: "+55 11 99999-8888",
      conversationStatus: "Aberta",
      owner: "Roberto Silva",
      tags: ["Urgente", "Potencial"],
      age: 29,
      gender: "Masculino",
      country: "Brasil",
      state: "SC",
      city: "Florianópolis",
      rating: 3,
      kanbanList: "Hot Lead",
    },
    {
      id: 9,
      name: "Carla Mendes",
      email: "carla.mendes@email.com",
      phone: "+55 11 99999-9999",
      conversationStatus: "Pausada",
      owner: "Patricia Gomes",
      tags: ["Frio"],
      age: 33,
      gender: "Feminino",
      country: "Brasil",
      state: "MG",
      city: "Uberlândia",
      rating: 2,
      kanbanList: "Lead Qualificado",
    },
    {
      id: 10,
      name: "Lucas Rodrigues",
      email: "lucas.rodrigues@email.com",
      phone: "+55 11 99999-0000",
      conversationStatus: "Andamento",
      owner: "João Santos",
      tags: ["Quente"],
      age: 27,
      gender: "Masculino",
      country: "Brasil",
      state: "BA",
      city: "Feira de Santana",
      rating: 4,
      kanbanList: "Negociação",
    },
    {
      id: 11,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 555 123-4567",
      conversationStatus: "Aberta",
      owner: "Maria Costa",
      tags: ["International", "Premium"],
      age: 34,
      gender: "Masculino",
      country: "Estados Unidos",
      state: "CA",
      city: "Los Angeles",
      rating: 4,
      kanbanList: "Hot Lead",
    },
    {
      id: 12,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 555 987-6543",
      conversationStatus: "Andamento",
      owner: "Pedro Lima",
      tags: ["Enterprise"],
      age: 29,
      gender: "Feminino",
      country: "Estados Unidos",
      state: "NY",
      city: "New York",
      rating: 5,
      kanbanList: "Proposta Enviada",
    },
    {
      id: 13,
      name: "Carlos García",
      email: "carlos.garcia@email.com",
      phone: "+54 11 1234-5678",
      conversationStatus: "Resolvida",
      owner: "Ana Rodrigues",
      tags: ["LATAM", "VIP"],
      age: 41,
      gender: "Masculino",
      country: "Argentina",
      state: "Buenos Aires",
      city: "Buenos Aires",
      rating: 4,
      kanbanList: "Fechado",
    },
    {
      id: 14,
      name: "María López",
      email: "maria.lopez@email.com",
      phone: "+54 351 789-0123",
      conversationStatus: "Aberta",
      owner: "Carlos Mendes",
      tags: ["Potencial"],
      age: 32,
      gender: "Feminino",
      country: "Argentina",
      state: "Córdoba",
      city: "Córdoba",
      rating: 3,
      kanbanList: "Lead Qualificado",
    },
  ],
  agents: [
    "João Santos",
    "Maria Costa",
    "Pedro Lima",
    "Ana Rodrigues",
    "Carlos Mendes",
    "Lucia Dias",
    "Roberto Silva",
    "Patricia Gomes",
  ],
  conversationStatuses: ["Aberta", "Em andamento", "Em pausa", "Resolvida"],
  kanbanLists: [
    "Hot Lead",
    "Lead Qualificado",
    "Proposta Enviada",
    "Negociação",
    "Fechado",
  ],
  availableTags: [
    "Premium",
    "VIP",
    "Interessado",
    "Seguimiento",
    "Cliente VIP",
    "Satisfeito",
    "Perdido",
    "Novo Lead",
    "Urgente",
    "Potencial",
    "Frio",
    "Quente",
    "International",
    "Enterprise",
    "LATAM",
  ],
  groups: [
    "Grupo Premium",
    "Grupo VIP",
    "Leads 2024",
    "Clientes Antigos",
    "Novos Leads",
    "Grupo Teste",
    "Campanha Janeiro",
    "Grupo Especial",
  ],
  previousCampaigns: [
    {
      id: 1,
      date: "2024-12-15",
      type: "Bulk Message",
      contactsAffected: 150,
      status: "Concluída",
      successRate: "95%",
    },
    {
      id: 2,
      date: "2024-12-10",
      type: "Status Change",
      contactsAffected: 75,
      status: "Concluída",
      successRate: "100%",
    },
    {
      id: 3,
      date: "2024-12-05",
      type: "Tag Addition",
      contactsAffected: 200,
      status: "Concluída",
      successRate: "98%",
    },
    {
      id: 4,
      date: "2024-11-28",
      type: "Owner Change",
      contactsAffected: 89,
      status: "Concluída",
      successRate: "100%",
    },
    {
      id: 5,
      date: "2024-11-20",
      type: "Kanban Move",
      contactsAffected: 120,
      status: "Concluída",
      successRate: "97%",
    },
  ],
};

// Application State
let appState = {
  filteredContacts: [...appData.contacts],
  selectedContacts: new Set(),
  currentPage: 1,
  itemsPerPage: 10,
  filtersApplied: false,
  activeActions: {},
};

// DOM Elements
const elements = {
  // Header
  contactsCount: document.querySelector(".contacts-count"),

  // Filters
  searchQuery: document.getElementById("searchQuery"),
  filterRating: document.getElementById("filterRating"),
  filterAgeRange: document.getElementById("filterAgeRange"),
  filterCountry: document.getElementById("filterCountry"),
  filterState: document.getElementById("filterState"),
  filterCity: document.getElementById("filterCity"),
  filterOwner: document.getElementById("filterOwner"),
  filterStatus: document.getElementById("filterStatus"),
  filterKanban: document.getElementById("filterKanban"),
  groupsCheckboxes: document.getElementById("groupsCheckboxes"),

  // Filter actions
  applyFilters: document.getElementById("applyFilters"),
  resetFilters: document.getElementById("resetFilters"),

  // Results
  resultsCount: document.getElementById("resultsCount"),
  selectedCount: document.getElementById("selectedCount"),

  // Table
  contactsTableBody: document.getElementById("contactsTableBody"),
  selectAll: document.getElementById("selectAll"),

  // Pagination
  currentPage: document.getElementById("currentPage"),
  totalPages: document.getElementById("totalPages"),
  prevPage: document.getElementById("prevPage"),
  nextPage: document.getElementById("nextPage"),

  // Actions
  actionsGrid: document.getElementById("actionsGrid"),
  newOwner: document.getElementById("newOwner"),
  newStatus: document.getElementById("newStatus"),
  newKanban: document.getElementById("newKanban"),
  newTag: document.getElementById("newTag"),
  newGroup: document.getElementById("newGroup"),
  applyActions: document.getElementById("applyActions"),

  // Action buttons
  sendBulkMessage: document.getElementById("sendBulkMessage"),
  downloadCSV: document.getElementById("downloadCSV"),
  deleteContacts: document.getElementById("deleteContacts"),

  // Modals
  reportsModal: document.getElementById("reportsModal"),
  confirmModal: document.getElementById("confirmModal"),
  closeReportsModal: document.getElementById("closeReportsModal"),
  closeConfirmModal: document.getElementById("closeConfirmModal"),
  viewReports: document.getElementById("viewReports"),
  viewPreviousReports: document.getElementById("viewPreviousReports"),

  // Modal content
  reportsTableBody: document.getElementById("reportsTableBody"),
  affectedCount: document.getElementById("affectedCount"),
  actionsList: document.getElementById("actionsList"),
  cancelAction: document.getElementById("cancelAction"),
  confirmAction: document.getElementById("confirmAction"),
};

// Initialize Application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  populateFilterOptions();
  setupEventListeners();
  setupSectionToggles();
  updateDisplay();
  showEmptyState();
}

function populateFilterOptions() {
  // Populate agents (only these are populated dynamically)
  appData.agents.forEach((agent) => {
    const option = document.createElement("option");
    option.value = agent;
    option.textContent = agent;
    elements.filterOwner.appendChild(option);

    const actionOption = document.createElement("option");
    actionOption.value = agent;
    actionOption.textContent = agent;
    elements.newOwner.appendChild(actionOption);
  });

  // Populate action selects (these need to be populated dynamically for actions)
  appData.conversationStatuses.forEach((status) => {
    const actionOption = document.createElement("option");
    actionOption.value = status;
    actionOption.textContent = status;
    elements.newStatus.appendChild(actionOption);
  });

  appData.kanbanLists.forEach((kanban) => {
    const actionOption = document.createElement("option");
    actionOption.value = kanban;
    actionOption.textContent = kanban;
    elements.newKanban.appendChild(actionOption);
  });

  // Populate available tags for actions
  appData.availableTags.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    elements.newTag.appendChild(option);
  });

  // Populate groups
  appData.groups.forEach((group) => {
    const option = document.createElement("option");
    option.value = group;
    option.textContent = group;
    elements.newGroup.appendChild(option);

    const checkbox = document.createElement("label");
    checkbox.className = "checkbox-label";
    checkbox.innerHTML = `
      <input type="checkbox" name="group" value="${group}">
      ${group}
    `;
    elements.groupsCheckboxes.appendChild(checkbox);
  });
}

// Geographic filter functions
function updateStateOptions() {
  const countrySelect = elements.filterCountry;
  const stateSelect = elements.filterState;
  const citySelect = elements.filterCity;

  // Clear existing options
  stateSelect.innerHTML = '<option value="">Todos os estados</option>';
  citySelect.innerHTML = '<option value="">Todas as cidades</option>';

  const selectedCountry = countrySelect.value;
  if (selectedCountry && geographicData[selectedCountry]) {
    const states = Object.keys(geographicData[selectedCountry]);
    states.forEach((state) => {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }
}

function updateCityOptions() {
  const countrySelect = elements.filterCountry;
  const stateSelect = elements.filterState;
  const citySelect = elements.filterCity;

  // Clear existing options
  citySelect.innerHTML = '<option value="">Todas as cidades</option>';

  const selectedCountry = countrySelect.value;
  const selectedState = stateSelect.value;

  if (
    selectedCountry &&
    selectedState &&
    geographicData[selectedCountry] &&
    geographicData[selectedCountry][selectedState]
  ) {
    const cities = geographicData[selectedCountry][selectedState];
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}

// Tags management functions
let selectedTags = new Set();

function addTag(tagValue) {
  if (tagValue && !selectedTags.has(tagValue)) {
    selectedTags.add(tagValue);
    renderSelectedTags();
  }
}

function removeTag(tagValue) {
  selectedTags.delete(tagValue);
  renderSelectedTags();
}

function renderSelectedTags() {
  const container = document.getElementById("selectedTags");
  container.innerHTML = "";

  selectedTags.forEach((tag) => {
    const tagElement = document.createElement("div");
    tagElement.className = "tag-item";
    tagElement.innerHTML = `
      <span>${tag}</span>
      <button type="button" class="remove-tag" onclick="removeTag('${tag}')">×</button>
    `;
    container.appendChild(tagElement);
  });
}

function setupEventListeners() {
  // Geographic filters
  elements.filterCountry.addEventListener("change", updateStateOptions);
  elements.filterState.addEventListener("change", updateCityOptions);

  // Tags input
  const tagInput = document.getElementById("tagInput");
  if (tagInput) {
    tagInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const tagValue = this.value.trim();
        if (tagValue) {
          addTag(tagValue);
          this.value = "";
        }
      }
    });
  }

  // Filter actions
  elements.applyFilters.addEventListener("click", applyFilters);
  elements.resetFilters.addEventListener("click", resetFilters);

  // Search with debounce
  elements.searchQuery.addEventListener("input", debounce(applyFilters, 300));

  // Table selection
  elements.selectAll.addEventListener("change", toggleSelectAll);

  // Pagination
  elements.prevPage.addEventListener("click", () => changePage(-1));
  elements.nextPage.addEventListener("click", () => changePage(1));

  // Actions
  elements.applyActions.addEventListener("click", showConfirmModal);
  elements.sendBulkMessage.addEventListener("click", sendBulkMessage);
  elements.downloadCSV.addEventListener("click", downloadCSV);
  elements.deleteContacts.addEventListener("click", deleteSelectedContacts);

  // Action selects - with immediate feedback
  [
    elements.newOwner,
    elements.newStatus,
    elements.newKanban,
    elements.newTag,
    elements.newGroup,
  ].forEach((select) => {
    select.addEventListener("change", function () {
      updateActiveActions();
      highlightActiveActions();
    });
  });

  // Modals
  elements.viewReports.addEventListener("click", showReportsModal);
  elements.viewPreviousReports.addEventListener("click", showReportsModal);
  elements.closeReportsModal.addEventListener("click", hideReportsModal);
  elements.closeConfirmModal.addEventListener("click", hideConfirmModal);
  elements.cancelAction.addEventListener("click", hideConfirmModal);
  elements.confirmAction.addEventListener("click", executeActions);

  // Close modals on backdrop click
  elements.reportsModal.addEventListener("click", (e) => {
    if (e.target === elements.reportsModal) hideReportsModal();
  });
  elements.confirmModal.addEventListener("click", (e) => {
    if (e.target === elements.confirmModal) hideConfirmModal();
  });
}

function setupSectionToggles() {
  const toggles = document.querySelectorAll(".section-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const sectionId = toggle.dataset.section;
      const content = document.getElementById(sectionId);
      const icon = toggle.querySelector(".toggle-icon");

      if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        toggle.classList.add("collapsed");
        icon.textContent = "+";
      } else {
        content.classList.add("expanded");
        toggle.classList.remove("collapsed");
        icon.textContent = "−";
      }
    });
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function applyFilters() {
  const filters = getActiveFilters();

  appState.filteredContacts = appData.contacts.filter((contact) => {
    return (
      matchesSearch(contact, filters.search) &&
      matchesRating(contact, filters.rating) &&
      matchesAgeRange(contact, filters.ageRange) &&
      matchesGender(contact, filters.genders) &&
      matchesLocation(contact, filters.country, filters.state, filters.city) &&
      matchesConversation(
        contact,
        filters.owner,
        filters.status,
        filters.kanban
      ) &&
      matchesTags(contact, filters.tags) &&
      matchesGroups(contact, filters.groups)
    );
  });

  appState.filtersApplied = true;
  appState.currentPage = 1;
  appState.selectedContacts.clear();

  updateDisplay();
  showActionsGrid();
  showToast(
    `Filtros aplicados: ${appState.filteredContacts.length} contatos encontrados`,
    "success"
  );
}

function getActiveFilters() {
  const genders = Array.from(
    document.querySelectorAll('input[name="gender"]:checked')
  ).map((cb) => cb.value);
  const groups = Array.from(
    document.querySelectorAll('input[name="groups"]:checked')
  ).map((cb) => cb.value);

  return {
    search: elements.searchQuery.value.toLowerCase().trim(),
    rating: elements.filterRating.value,
    ageRange: elements.filterAgeRange.value,
    genders: genders,
    country: elements.filterCountry.value,
    state: elements.filterState.value,
    city: elements.filterCity.value,
    owner: elements.filterOwner.value,
    status: elements.filterStatus.value,
    kanban: elements.filterKanban.value,
    tags: Array.from(selectedTags), // Use the dynamic tags system
    groups: groups,
  };
}

function matchesSearch(contact, search) {
  if (!search) return true;
  return (
    contact.name.toLowerCase().includes(search) ||
    contact.email.toLowerCase().includes(search)
  );
}

function matchesRating(contact, rating) {
  return !rating || contact.rating.toString() === rating;
}

function matchesAgeRange(contact, ageRange) {
  if (!ageRange) return true;

  const age = contact.age;
  switch (ageRange) {
    case "18-25":
      return age >= 18 && age <= 25;
    case "26-35":
      return age >= 26 && age <= 35;
    case "36-45":
      return age >= 36 && age <= 45;
    case "46-60":
      return age >= 46 && age <= 60;
    case "60+":
      return age > 60;
    default:
      return true;
  }
}

function matchesGender(contact, genders) {
  return genders.length === 0 || genders.includes(contact.gender);
}

function matchesLocation(contact, country, state, city) {
  return (
    (!country || contact.country === country) &&
    (!state || contact.state === state) &&
    (!city || contact.city === city)
  );
}

function matchesConversation(contact, owner, status, kanban) {
  return (
    (!owner || contact.owner === owner) &&
    (!status || contact.conversationStatus === status) &&
    (!kanban || contact.kanbanList === kanban)
  );
}

function matchesTags(contact, tags) {
  return tags.length === 0 || tags.some((tag) => contact.tags.includes(tag));
}

function matchesGroups(contact, groups) {
  // For demo purposes, assuming contacts can be in groups
  return groups.length === 0;
}

function resetFilters() {
  // Reset form fields
  elements.searchQuery.value = "";
  elements.filterRating.value = "";
  elements.filterAgeRange.value = "";
  elements.filterCountry.value = "";
  elements.filterState.value = "";
  elements.filterCity.value = "";
  elements.filterOwner.value = "";
  elements.filterStatus.value = "";
  elements.filterKanban.value = "";

  // Reset checkboxes
  document
    .querySelectorAll('input[name="gender"]')
    .forEach((cb) => (cb.checked = false));
  document
    .querySelectorAll('input[name="groups"]')
    .forEach((cb) => (cb.checked = false));

  // Reset dynamic tags
  selectedTags.clear();
  renderSelectedTags();
  const tagInput = document.getElementById("tagInput");
  if (tagInput) tagInput.value = "";

  // Reset geographic filters
  updateStateOptions();
  updateCityOptions();

  // Reset actions
  elements.newOwner.value = "";
  elements.newStatus.value = "";
  elements.newKanban.value = "";
  elements.newTag.value = "";
  elements.newGroup.value = "";

  // Reset state
  appState.filteredContacts = [...appData.contacts];
  appState.filtersApplied = false;
  appState.currentPage = 1;
  appState.selectedContacts.clear();
  appState.activeActions = {};

  updateDisplay();
  hideActionsGrid();
  showToast("Filtros resetados", "info");
}

function updateDisplay() {
  updateContactsCount();
  renderContactsTable();
  updatePagination();
  updateSelectionInfo();
  updateActionButtons();
}

function updateContactsCount() {
  const count = appState.filteredContacts.length;
  elements.contactsCount.textContent = `${count} contatos encontrados`;
  elements.resultsCount.textContent = `${count} contatos encontrados`;
}

function renderContactsTable() {
  const startIndex = (appState.currentPage - 1) * appState.itemsPerPage;
  const endIndex = startIndex + appState.itemsPerPage;
  const pageContacts = appState.filteredContacts.slice(startIndex, endIndex);

  if (pageContacts.length === 0) {
    elements.contactsTableBody.innerHTML = `
      <tr>
        <td colspan="8" class="no-results">
          ${
            appState.filtersApplied
              ? "Nenhum contato encontrado com os filtros aplicados."
              : "Aplique filtros para ver os resultados."
          }
        </td>
      </tr>
    `;
    return;
  }

  elements.contactsTableBody.innerHTML = pageContacts
    .map((contact) => {
      const isSelected = appState.selectedContacts.has(contact.id);
      const statusColor = getStatusColor(contact.conversationStatus);

      return `
      <tr class="${isSelected ? "selected" : ""}" data-contact-id="${
        contact.id
      }">
        <td>
          <input type="checkbox" ${isSelected ? "checked" : ""} 
                 onchange="toggleContactSelection(${contact.id})">
        </td>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.phone}</td>
        <td>
          <span class="status-badge" style="background-color: ${statusColor}; color: white;">
            ${contact.conversationStatus}
          </span>
        </td>
        <td>${contact.owner}</td>
        <td>
          ${contact.tags
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("")}
        </td>
        <td>
          <button class="btn btn--outline btn--sm" onclick="viewContactDetails(${
            contact.id
          })">
            Ver Detalhes
          </button>
        </td>
      </tr>
    `;
    })
    .join("");
}

function getStatusColor(status) {
  const statusColors = {
    Aberta: "#3B82F6",
    Andamento: "#F59E0B",
    Resolvida: "#10B981",
    Pausada: "#6B7280",
  };
  return statusColors[status] || "#6B7280";
}

function updatePagination() {
  const totalPages = Math.ceil(
    appState.filteredContacts.length / appState.itemsPerPage
  );

  elements.currentPage.textContent = appState.currentPage;
  elements.totalPages.textContent = totalPages || 1;

  elements.prevPage.disabled = appState.currentPage === 1;
  elements.nextPage.disabled =
    appState.currentPage === totalPages || totalPages === 0;
}

function updateSelectionInfo() {
  const selectedCount = appState.selectedContacts.size;
  elements.selectedCount.textContent = `${selectedCount} selecionados`;

  // Update select all checkbox
  const pageContacts = getCurrentPageContacts();
  const selectedInPage = pageContacts.filter((c) =>
    appState.selectedContacts.has(c.id)
  ).length;

  elements.selectAll.checked =
    pageContacts.length > 0 && selectedInPage === pageContacts.length;
  elements.selectAll.indeterminate =
    selectedInPage > 0 && selectedInPage < pageContacts.length;
}

function getCurrentPageContacts() {
  const startIndex = (appState.currentPage - 1) * appState.itemsPerPage;
  const endIndex = startIndex + appState.itemsPerPage;
  return appState.filteredContacts.slice(startIndex, endIndex);
}

function changePage(direction) {
  const totalPages = Math.ceil(
    appState.filteredContacts.length / appState.itemsPerPage
  );
  const newPage = appState.currentPage + direction;

  if (newPage >= 1 && newPage <= totalPages) {
    appState.currentPage = newPage;
    updateDisplay();
  }
}

function toggleSelectAll() {
  const pageContacts = getCurrentPageContacts();

  if (elements.selectAll.checked) {
    pageContacts.forEach((contact) => {
      appState.selectedContacts.add(contact.id);
    });
  } else {
    pageContacts.forEach((contact) => {
      appState.selectedContacts.delete(contact.id);
    });
  }

  updateDisplay();
  updateActionButtons();
}

function toggleContactSelection(contactId) {
  if (appState.selectedContacts.has(contactId)) {
    appState.selectedContacts.delete(contactId);
  } else {
    appState.selectedContacts.add(contactId);
  }

  updateDisplay();
  updateActionButtons();
}

function showActionsGrid() {
  elements.actionsGrid.classList.remove("hidden");
  updateActionButtons();
}

function hideActionsGrid() {
  elements.actionsGrid.classList.add("hidden");
}

function updateActionButtons() {
  const hasSelection = appState.selectedContacts.size > 0;
  const hasActions = Object.keys(appState.activeActions).length > 0;

  // Update action block states
  document.querySelectorAll(".action-block").forEach((block) => {
    if (hasSelection) {
      block.classList.remove("disabled");
    } else {
      block.classList.add("disabled");
    }
  });

  // Update individual controls
  document
    .querySelectorAll(".action-select, .action-btn")
    .forEach((control) => {
      control.disabled = !hasSelection;
    });

  // Update apply actions button with clear feedback
  if (elements.applyActions) {
    if (!hasSelection) {
      elements.applyActions.disabled = true;
      elements.applyActions.textContent = "Selecione Contatos Primeiro";
    } else if (!hasActions) {
      elements.applyActions.disabled = true;
      elements.applyActions.textContent = "Escolha uma Ação Primeiro";
    } else {
      elements.applyActions.disabled = false;
      elements.applyActions.textContent = `Aplicar ${
        Object.keys(appState.activeActions).length
      } Ação(ões) em ${hasSelection} Contatos`;
    }
  }
}

function updateActiveActions() {
  appState.activeActions = {};

  if (elements.newOwner.value) {
    appState.activeActions.owner = elements.newOwner.value;
  }
  if (elements.newStatus.value) {
    appState.activeActions.status = elements.newStatus.value;
  }
  if (elements.newKanban.value) {
    appState.activeActions.kanban = elements.newKanban.value;
  }
  if (elements.newTag.value) {
    appState.activeActions.tag = elements.newTag.value;
  }
  if (elements.newGroup.value) {
    appState.activeActions.group = elements.newGroup.value;
  }

  updateActionButtons();
}

function highlightActiveActions() {
  // Remove previous highlights
  document.querySelectorAll(".action-block").forEach((block) => {
    block.classList.remove("active");
  });

  // Add highlights for active actions
  if (elements.newOwner.value) {
    elements.newOwner.closest(".action-block").classList.add("active");
  }
  if (elements.newStatus.value) {
    elements.newStatus.closest(".action-block").classList.add("active");
  }
  if (elements.newKanban.value) {
    elements.newKanban.closest(".action-block").classList.add("active");
  }
  if (elements.newTag.value) {
    elements.newTag.closest(".action-block").classList.add("active");
  }
  if (elements.newGroup.value) {
    elements.newGroup.closest(".action-block").classList.add("active");
  }
}

function showConfirmModal() {
  const selectedCount = appState.selectedContacts.size;
  const actions = Object.entries(appState.activeActions);

  if (selectedCount === 0) {
    showToast("Selecione pelo menos um contato primeiro.", "warning");
    return;
  }

  if (actions.length === 0) {
    showToast("Escolha pelo menos uma ação para aplicar.", "warning");
    return;
  }

  elements.affectedCount.textContent = selectedCount;

  const actionNames = {
    owner: "Alterar dono para",
    status: "Alterar status para",
    kanban: "Mover para lista",
    tag: "Adicionar tag",
    group: "Adicionar ao grupo",
  };

  const actionsList = actions
    .map(([key, value]) => {
      return `<li>${actionNames[key]}: <strong>${value}</strong></li>`;
    })
    .join("");

  elements.actionsList.innerHTML = actionsList;
  elements.confirmModal.classList.add("active");
}

function hideConfirmModal() {
  elements.confirmModal.classList.remove("active");
}

function executeActions() {
  const selectedIds = Array.from(appState.selectedContacts);
  const actions = appState.activeActions;

  // Apply actions to selected contacts
  selectedIds.forEach((id) => {
    const contactIndex = appData.contacts.findIndex((c) => c.id === id);
    if (contactIndex !== -1) {
      if (actions.owner) {
        appData.contacts[contactIndex].owner = actions.owner;
      }
      if (actions.status) {
        appData.contacts[contactIndex].conversationStatus = actions.status;
      }
      if (actions.kanban) {
        appData.contacts[contactIndex].kanbanList = actions.kanban;
      }
      if (
        actions.tag &&
        !appData.contacts[contactIndex].tags.includes(actions.tag)
      ) {
        appData.contacts[contactIndex].tags.push(actions.tag);
      }
    }
  });

  // Reset state
  appState.selectedContacts.clear();
  appState.activeActions = {};

  // Reset action selects
  elements.newOwner.value = "";
  elements.newStatus.value = "";
  elements.newKanban.value = "";
  elements.newTag.value = "";
  elements.newGroup.value = "";

  // Remove highlights
  document.querySelectorAll(".action-block").forEach((block) => {
    block.classList.remove("active");
  });

  hideConfirmModal();
  applyFilters(); // Refresh view

  showToast(
    `Ações aplicadas com sucesso em ${selectedIds.length} contatos!`,
    "success"
  );
}

function sendBulkMessage() {
  if (appState.selectedContacts.size === 0) {
    showToast(
      "Selecione pelo menos um contato para enviar mensagem.",
      "warning"
    );
    return;
  }

  const confirmed = confirm(
    `Deseja enviar uma mensagem em massa para ${appState.selectedContacts.size} contatos selecionados?`
  );

  if (confirmed) {
    showToast(
      `Mensagem enviada para ${appState.selectedContacts.size} contatos!`,
      "success"
    );
  }
}

function downloadCSV() {
  if (appState.selectedContacts.size === 0) {
    showToast(
      "Selecione pelo menos um contato para fazer o download.",
      "warning"
    );
    return;
  }

  const selectedIds = Array.from(appState.selectedContacts);
  const selectedContacts = appData.contacts.filter((c) =>
    selectedIds.includes(c.id)
  );

  const headers = ["Nome", "Email", "Telefone", "Status", "Dono", "Tags"];
  const csvContent = [
    headers.join(","),
    ...selectedContacts.map((contact) =>
      [
        `"${contact.name}"`,
        `"${contact.email}"`,
        `"${contact.phone}"`,
        `"${contact.conversationStatus}"`,
        `"${contact.owner}"`,
        `"${contact.tags.join("; ")}"`,
      ].join(",")
    ),
  ].join("\n");

  // Create and download file
  const blob = new Blob(["\ufeff" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `contatos_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(
      `Arquivo CSV com ${selectedIds.length} contatos baixado!`,
      "success"
    );
  }
}

function deleteSelectedContacts() {
  if (appState.selectedContacts.size === 0) {
    showToast("Selecione pelo menos um contato para excluir.", "warning");
    return;
  }

  const confirmed = confirm(
    `⚠️ ATENÇÃO: Deseja realmente excluir ${appState.selectedContacts.size} contatos selecionados? Esta ação não pode ser desfeita.`
  );

  if (confirmed) {
    const selectedIds = Array.from(appState.selectedContacts);

    // Remove from data (in a real app, this would be an API call)
    selectedIds.forEach((id) => {
      const index = appData.contacts.findIndex((c) => c.id === id);
      if (index !== -1) {
        appData.contacts.splice(index, 1);
      }
    });

    // Reset state
    appState.selectedContacts.clear();
    applyFilters();

    showToast(
      `${selectedIds.length} contatos excluídos com sucesso.`,
      "success"
    );
  }
}

function showReportsModal() {
  populateReportsTable();
  elements.reportsModal.classList.add("active");
}

function hideReportsModal() {
  elements.reportsModal.classList.remove("active");
}

function populateReportsTable() {
  const rows = appData.previousCampaigns
    .map(
      (campaign) => `
    <tr>
      <td>${new Date(campaign.date).toLocaleDateString("pt-BR")}</td>
      <td>${campaign.type}</td>
      <td>${campaign.contactsAffected}</td>
      <td><span class="status status--success">${campaign.status}</span></td>
      <td>${campaign.successRate}</td>
      <td>
        <button class="btn btn--outline btn--sm" onclick="viewCampaignDetails(${
          campaign.id
        })">
          Ver Detalhes
        </button>
      </td>
    </tr>
  `
    )
    .join("");

  elements.reportsTableBody.innerHTML = rows;
}

function showEmptyState() {
  if (!appState.filtersApplied) {
    elements.contactsTableBody.innerHTML = `
      <tr>
        <td colspan="8" class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p>Use os filtros à esquerda para encontrar contatos específicos</p>
          <button class="btn btn--primary" onclick="document.getElementById('searchQuery').focus()">
            Começar Busca
          </button>
        </td>
      </tr>
    `;
  }
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => toast.classList.add("show"), 100);

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// Global functions for onclick handlers
window.toggleContactSelection = toggleContactSelection;

window.viewContactDetails = function (contactId) {
  const contact = appData.contacts.find((c) => c.id === contactId);
  if (contact) {
    alert(
      `Detalhes do contato:\n\nNome: ${contact.name}\nEmail: ${contact.email}\nTelefone: ${contact.phone}\nIdade: ${contact.age}\nAvaliação: ${contact.rating} estrelas`
    );
  }
};

window.viewCampaignDetails = function (campaignId) {
  const campaign = appData.previousCampaigns.find((c) => c.id === campaignId);
  if (campaign) {
    alert(
      `Detalhes da campanha:\n\nTipo: ${campaign.type}\nData: ${new Date(
        campaign.date
      ).toLocaleDateString("pt-BR")}\nContatos afetados: ${
        campaign.contactsAffected
      }\nTaxa de sucesso: ${campaign.successRate}`
    );
  }
};
