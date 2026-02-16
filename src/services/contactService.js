import axiosInstance from "./axiosInstance";

export const contactService = {
  // Submit contact form
  submitContact: async (contactData) => {
    console.log("contactService.submitContact called with:", {
      full_name: contactData.full_name,
      email: contactData.email,
      phone_number: contactData.phone_number,
      industry: contactData.industry,
      message: contactData.message,
    });

    try {
      const response = await axiosInstance.post("api/contact/", contactData);
      console.log("Contact API response:", response.status, response.data);

      // Check for error response structure
      if (response.data?.status === false && response.data?.errors) {
        console.error("Contact API returned error:", response.data.errors);

        // Handle field-specific errors
        if (typeof response.data.errors === "object") {
          const errorMessages = Object.values(response.data.errors).flat();
          const errorMessage = errorMessages[0] || "Contact submission failed";
          const error = new Error(errorMessage);
          error.response = { data: response.data };
          error.fieldErrors = response.data.errors;
          throw error;
        }

        // Handle non_field_errors (fallback)
        const error = new Error(
          response.data.errors.non_field_errors?.[0] ||
            "Contact submission failed",
        );
        error.response = { data: response.data };
        throw error;
      }

      return response.data;
    } catch (error) {
      console.error("Contact service error:", error);
      console.error("Error details:", error.response?.data || error.message);

      // Re-throw with consistent error structure
      if (error.response?.data?.errors) {
        // Handle field-specific errors
        if (typeof error.response.data.errors === "object") {
          const errorMessages = Object.values(
            error.response.data.errors,
          ).flat();
          const apiError = new Error(errorMessages[0]);
          apiError.response = error.response;
          apiError.fieldErrors = error.response.data.errors;
          throw apiError;
        }

        // Handle non_field_errors (fallback)
        const apiError = new Error(
          error.response.data.errors.non_field_errors?.[0],
        );
        apiError.response = error.response;
        throw apiError;
      }

      throw error;
    }
  },
};

export default contactService;
