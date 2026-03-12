import { useCallback } from "react";
import ReactGA from "react-ga4";

export const useLeadTracking = () => {
  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .replace(/[_\s]+/g, "_")
      .trim();

  const getUTMParams = () => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || params.get("utmSource") || undefined,
      utm_medium: params.get("utm_medium") || params.get("utmMedium") || undefined,
      utm_campaign: params.get("utm_campaign") || params.get("utmCampaign") || undefined,
      utm_term: params.get("utm_term") || params.get("utmTerm") || params.get("utmTerm") || undefined,
      utm_content: params.get("utm_content") || params.get("utmContent") || undefined,
    };
  };

  const trackButtonClick = useCallback(
    (source, action, propertyType = null) => {
      const normalizedSource = normalize(source);
      const normalizedAction = normalize(action);

      const eventParams = {
        event_category: "Button Click",
        event_label: source,
        lead_source: source,
        action: action,
        property_type: propertyType,
        ...getUTMParams(),
      };

      // Push to GTM dataLayer
      if (window?.dataLayer) {
        window.dataLayer.push({
          event: "contact_form_submit",
          event_type: "click",
          ...eventParams,
        });
      }

      // Send to GA4
      ReactGA.event("contact_form_submit", {
        event_type: "click",
        ...eventParams,
      });
    },
    []
  );

  const trackFormSubmission = useCallback(
    (source, formType, propertyType = null) => {
      const eventParams = {
        event_category: "Form Submission",
        event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
        lead_source: source,
        form_type: formType,
        property_type: propertyType,
        funnel_stage: formType === "contact_form" ? "lead" : "site_visit_request",
        transport_type: "beacon",
        ...getUTMParams(),
      };

      // 1. Generalized GTM and GA4 event (Standardized to contact_form_submit)
      if (window?.dataLayer) {
        window.dataLayer.push({
          event: "contact_form_submit",
          event_type: "submission",
          ...eventParams,
        });
      }

      // 2. Single GA4 event
      ReactGA.event("contact_form_submit", {
        event_type: "submission",
        ...eventParams,
      });
    },
    []
  );

  const trackFormOpen = useCallback((source, formType, propertyType = null, action = "enquire_now") => {
    const eventParams = {
      event_category: "Form Interaction",
      event_label:
        propertyType && !normalize(source).includes(normalize(propertyType))
          ? `${source} - ${propertyType}`
          : source,
      lead_source: source,
      form_type: formType,
      action: action,
      property_type: propertyType,
      funnel_stage: "consideration",
      transport_type: "beacon",
      ...getUTMParams(),
    };

    // Push to GTM dataLayer
    if (window?.dataLayer) {
      window.dataLayer.push({
        event: "contact_form_submit",
        event_type: "open",
        ...eventParams,
      });
    }

    // Send to GA4
    ReactGA.event("contact_form_submit", {
      event_type: "open",
      ...eventParams,
    });
  }, []);

  return {
    trackButtonClick,
    trackFormSubmission, 
    trackFormOpen,
  };
};

// Lead source constants
export const LEAD_SOURCES = {
  HERO: "hero_banner",
  OVERVIEW: "overview_section",
  PRICING_2BHK: "pricing_2BHK",
  PRICING_3BHK: "pricing_3BHK",
  PRICING_4BHK: "pricing_4BHK",
  MASTER_PLAN: "master_plan_section",
  FOOTER: "footer_section",
  CONTACT_FORM_LINK: "contact_form_internal_link",
  UNKNOWN: "unknown_source",
  NAVBAR_BANNER: "navbar_banner",
  LOCATION: "location_section",
  WHATSAPP: "whatsapp",
  NAVBAR: "navbar",
  CONTACT_FORM: "contact_form",
};

// Property types
export const PROPERTY_TYPES = {
  BHK2: "2BHK",
  BHK3: "3BHK",
  BHK4: "4BHK",
};
