// Category mapping for API calls and UI consistency
export const CATEGORY_MAPPING = {
  // Frontend display names -> Backend API category names
  'Buyers Leads': 'Buyers Leads',
  'Tenant Leads': 'Tenant Leads', 
  'Study Abroad': 'Study Abroad',
  'Forex Market': 'Forex Market',
  'Online MBA': 'Online MBA',
  'Phd/doctorate': 'Phd/doctorate',
  'Certification': 'Certification',
  
  // For backward compatibility and direct API calls
  'Buyers Leads': 'Buyers Leads',
  'Tenant Leads': 'Tenant Leads',
  'Study Abroad': 'Study Abroad',
  'Forex Market': 'Forex Market',
  'Online MBA': 'Online MBA',
  'Phd/doctorate': 'Phd/doctorate',
  'Certification': 'Certification'
};

// Get all available categories
export const getAllCategories = () => {
  return [
    'Buyers Leads',
    'Tenant Leads', 
    'Study Abroad',
    'Forex Market',
    'Online MBA',
    'Phd/doctorate',
    'Certification'
  ];
};

// Validate category
export const isValidCategory = (category) => {
  return Object.values(CATEGORY_MAPPING).includes(category);
};

export default CATEGORY_MAPPING;
