 let faqData = [
    {
        question: "Potential Tenancy Statuses - What they mean and how they work",
        response: "Understand the various tenancy statuses used in Eagle's Leasing module. Read more at: https://eaglesoftware.help/en/articles/5044424-potential-tenancy-statuses-what-they-mean-and-how-they-work",
        embedding: null
      },
      {
        question: "Editing application forms",
        response: "Learn how to edit and customize your rental application forms. Read more at: https://eaglesoftware.help/en/articles/4437030-editing-application-forms",
        embedding: null
      },
      {
        question: "How to set and use tenant ratings",
        response: "Get guidance on setting and using tenant ratings to manage potential tenants. Read more at: https://eaglesoftware.help/en/articles/5156756-how-to-set-and-use-tenant-ratings",
        embedding: null
      },
      {
        question: "How to setup your default forms in Eagle",
        response: "Discover how to configure your default forms for rental applications and reference checks. Read more at: https://eaglesoftware.help/en/articles/5156668-how-to-setup-your-default-forms-in-eagle",
        embedding: null
      },
      {
        question: "How to manage co-applicants in Eagle",
        response: "Learn how to add or remove co-applicants from an application in Eagle. Read more at: https://eaglesoftware.help/en/articles/5156700-how-to-manage-co-applicants-in-eagle",
        embedding: null
      },
    {
        question: "How do I stop an automation in Eagle Software?",
        response: "To stop an automation in Eagle Software: Navigate to 'Settings' > 'Automations'. Locate the automation you wish to stop, then click 'Disable' or delete it if no longer needed. More details are available at: https://eaglesoftware.help/en/articles/4817817-how-to-stop-an-automation",
        embedding: null
      },
      {
        question: "How does the 'Assign Contact' automation action work if a contact is already assigned in Eagle Software?",
        response: "If a contact is already assigned, the 'Assign Contact' automation action will not override the existing assignment unless explicitly configured to do so. This ensures that contact assignments are preserved unless your automation is set to reassign them. More details are available at: https://eaglesoftware.help/en/articles/2717095-how-does-the-assign-contact-automation-action-work-if-a-contact-is-already-assigned",
        embedding: null
      },
      {
        question: "How do I create a recurring task in Eagle Software?",
        response: "To create a recurring task in Eagle Software: Navigate to 'Tasks', click 'New Task' and enter the task details. Then, select the 'Repeat' option and choose the recurrence pattern (daily, weekly, monthly, etc.), and save the task. More details are available at: https://eaglesoftware.help/en/articles/2717095-how-to-create-a-recurring-task",
        embedding: null
      },
      {
        question: "How do I manually start an automation in Eagle Software?",
        response: "To manually start an automation in Eagle Software: Navigate to the 'Automations' section, select the automation you want to trigger, and click 'Run Now' to execute it immediately. More details are available at: https://eaglesoftware.help/en/articles/4817590-how-to-manually-start-an-automation",
        embedding: null
      },
      {
        question: "What is the Automations Overview in Eagle Software?",
        response: "The Automations Overview in Eagle Software provides an introduction to automating workflows and streamlining repetitive tasks. It explains how to set up rules that trigger specific actions based on defined conditions, saving you time and effort. For a comprehensive guide, visit: https://eaglesoftware.help/en/articles/2717096-automations-overview",
        embedding: null
      },
  {
    question: "How can I show bank details on invoices in Eagle Software?",
    response: "To display bank details on invoices: Navigate to 'Settings' > 'Templates' > 'Invoice Templates'. Select the template you wish to edit. Add your bank details in the designated section. Save the changes. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717096-how-to-show-bank-details-on-invoices",
    embedding: null
  },
  {
    question: "How do I generate a letter template in Eagle Software?",
    response: "To generate a letter template: Go to 'Settings' > 'Letter Templates'. Click 'New Letter Template'. Enter a template name and draft your content. Use template tags to insert dynamic data. Save the template. Detailed guidance is available at: https://eaglesoftware.help/en/articles/2717099-how-to-generate-a-letter-template",
    embedding: null
  },
  {
    question: "How can I set up default letters in Eagle Software?",
    response: "To set up default letters: Navigate to 'Settings' > 'Letter Templates'. Create or edit a template. Assign it as a default for specific actions or communications. Save your settings. More information can be found at: https://eaglesoftware.help/en/articles/4034958-setting-up-default-letters",
    embedding: null
  },
  {
    question: "How do I upload new agent photos in Eagle Software?",
    response: "To upload new agent photos: Go to 'Settings' > 'Agents'. Select the agent profile to edit. Click on the photo upload section to upload a new image. Save the changes. For more details, visit: https://eaglesoftware.help/en/articles/2717101-upload-new-agent-photos",
    embedding: null
  },
  {
    question: "How can I create a new SMS template in Eagle Software?",
    response: "To create a new SMS template: Navigate to 'Settings' > 'SMS Templates'. Click 'New SMS Template'. Enter a template name and message content. Use template tags for dynamic data. Save the template. Detailed instructions are available at: https://eaglesoftware.help/en/articles/5156548-how-to-create-a-new-sms-template",
    embedding: null
  },
  {
    question: "What are the different user permission types in Eagle Software?",
    response: "Eagle Software offers various user permission types to control access to different modules and features. For a comprehensive explanation, refer to: https://eaglesoftware.help/en/articles/2717137-user-permission-types-explained",
    embedding: null
  },
  {
    question: "How do I add email or letter template fields in Eagle Software?",
    response: "To add fields to email or letter templates: Navigate to 'Settings' > 'Email Templates' or 'Letter Templates'. Edit the desired template and use template tags (e.g., {{Contact.FirstName}}) to insert dynamic fields. More information is available at: https://eaglesoftware.help/en/articles/2717110-how-to-add-email-letter-template-fields",
    embedding: null
  },
  {
    question: "How do I update direct debit payment details in Eagle Software?",
    response: "To update your direct debit payment details: Navigate to 'Settings' > 'Billing & Subscription'. Click on 'Payment Details', enter the new information, and save your updated details. More information is available at: https://eaglesoftware.help/en/articles/2717103-update-direct-debit-payment-details",
    embedding: null
  },
  {
    question: "How do I create an email template in Eagle Software?",
    response: "To create an email template: Navigate to 'Settings' > 'Email Templates'. Click 'New Email Template', enter a template name and compose your content. Use template tags for dynamic data insertion. Save the template. More details are available at: http://eaglesoftware.help/en/articles/2717102-how-to-create-an-email-template",
    embedding: null
  },
  {
    question: "What is the difference between an agent and a user in Eagle Software?",
    response: "In Eagle Software, an 'agent' represents a real estate professional whose contact details are visible on listings, while a 'user' is someone with access to the CRM system. For more details, visit: https://eaglesoftware.help/en/articles/2717100-the-difference-between-an-agent-and-a-user",
    embedding: null
  },
  {
    question: "How do I manage custom fields in Eagle Software?",
    response: "To manage custom fields in Eagle Software: Navigate to 'Settings' > 'Custom Fields'. Click 'New Custom Field', define the field name, type, and applicable categories, then save. More information is available at: https://eaglesoftware.help/en/articles/2717098-custom-fields",
    embedding: null
  },
  {
    question: "How do I add or edit users in Eagle Software?",
    response: "To add or edit users in Eagle Software: Navigate to 'Settings' > 'Users'. Click 'Add New' to create a new user or click 'Edit' for an existing user. Modify roles and permissions as needed and save your changes. More details are available at: https://eaglesoftware.help/en/articles/2717097-how-to-add-edit-users",
    embedding: null
  },
  {
    question: "How do I use the address filter for 'Last Contacted' in Eagle Software?",
    response: "To use the 'Last Contacted' filter in Eagle Software: Navigate to 'Addresses'. Click on the filter options, select 'Last Contacted', set the desired date range, and apply the filter to view the relevant addresses. More details are available at: https://eaglesoftware.help/en/articles/6280512-address-filter-last-contacted",
    embedding: null
  },
  {
    question: "How do I import addresses in Eagle Software?",
    response: "To import addresses in Eagle Software: Navigate to 'Settings' > 'Data Import'. Choose 'Addresses' as the data type, upload your CSV file, map the columns correctly, and confirm the import. More details are available at: https://eaglesoftware.help/en/articles/3137921-how-to-import-addresses",
    embedding: null
  },
  {
    question: "How do I export addresses in Eagle Software?",
    response: "To export addresses in Eagle Software: Navigate to 'Addresses', apply any necessary filters, click 'Export', choose the file format (CSV, Excel, etc.), and download the file. More details are available at: https://eaglesoftware.help/en/articles/3161102-how-to-export-addresses",
    embedding: null
  },
  {
    question: "How do I view only my own addresses in Eagle Software?",
    response: "To view only your own addresses in Eagle Software: Navigate to 'Addresses', click the filter options, select 'Owner' and choose 'Me', and apply the filter. More details are available at: https://eaglesoftware.help/en/articles/3461048-how-do-i-view-only-my-own-addresses",
    embedding: null
  },
  {
    question: "What are ownership types in Eagle Software?",
    response: "Ownership types in Eagle Software define how addresses are categorized based on ownership status. To configure ownership types, navigate to 'Settings' > 'Ownership Types'. More details are available at: https://eaglesoftware.help/en/articles/5164448-ownership-types",
    embedding: null
  },
  {
    question: "How do I get a custom brochure in Eagle Software?",
    response: "To get a custom brochure in Eagle Software, request a bespoke design that aligns with your branding by preparing a mock-up and sending it to your account representative or support. A one-time development fee applies. More details are available at: https://eaglesoftware.help/en/articles/3214251-how-to-get-a-custom-brochure",
    embedding: null
  },
  {
    question: "What is the Single Photo Brochure Template?",
    response: "The Single Photo Brochure Template offers a clean, simple layout featuring one primary property image. It is ideal for properties that benefit from a strong visual focus. For image dimension guidelines and text fitting instructions, visit: https://eaglesoftware.help/en/articles/3207990-single-photo-brochure-template",
    embedding: null
  },
  {
    question: "How do I generate a window card brochure in Eagle Software?",
    response: "To generate a window card brochure, navigate to the Brochures section in Eagle Software, select 'Window Cards & Stocklists', choose your properties, and then select a window card template. Click 'Generate Brochures' to download the PDF version. More details are available at: https://eaglesoftware.help/en/articles/3205465-how-to-generate-a-window-card-brochure",
    embedding: null
  },
  {
    question: "How do I add or update my brochure disclaimer in Eagle Software?",
    response: "To add or update your brochure disclaimer, go to the Brochures settings in Eagle Software. Edit the default disclaimer text to meet your requirements and local regulations. More details are available at: https://eaglesoftware.help/en/articles/2717118-add-update-my-brochure-disclaimer",
    embedding: null
  },
  {
    question: "What is the Simple Multi-View Brochure Template?",
    response: "The Simple Multi-View Brochure Template allows you to showcase multiple property images in a modern, uncluttered layout. For complete setup and formatting instructions, visit: https://eaglesoftware.help/en/articles/3208044-simple-multi-view-brochure-template",
    embedding: null
  },
  {
    question: "How do I generate a property stocklist in Eagle Software?",
    response: "To generate a property stocklist, navigate to the Brochures section, select 'Property Stocklist', choose the desired properties, and click 'Generate'. A downloadable PDF will be created. More details are available at: https://eaglesoftware.help/en/articles/3180206-how-to-generate-a-property-stocklist",
    embedding: null
  },
  {
    question: "What is the Modern Brochure Template?",
    response: "The Modern Brochure Template offers a sleek, contemporary design that can be customized to match your branding. For complete instructions on setup and usage, visit: https://eaglesoftware.help/en/articles/3208066-modern-brochure-template",
    embedding: null
  },
  {
    question: "How do I generate a DL flyer in Eagle Software?",
    response: "To generate a DL flyer, navigate to the Flyers section, select the DL Flyer template, choose the desired property or properties, and click 'Generate'. The flyer will be available as a downloadable PDF. More details are available at: https://eaglesoftware.help/en/articles/2717117-how-to-generate-a-dl-flyer",
    embedding: null
  },
  {
    question: "How do I fit text to brochures in Eagle Software?",
    response: "To fit text appropriately in your brochures, follow the specific guidelines for each template (such as character limits per line and maximum lines). For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717114-how-to-fit-text-to-brochures",
    embedding: null
  },
  {
    question: "What is the Modern Landscape with Floorplan Brochure Template?",
    response: "The Modern Landscape with Floorplan Brochure Template combines high-quality property images with an integrated floorplan view for a comprehensive presentation. For setup and design instructions, visit: https://eaglesoftware.help/en/articles/3208055-modern-landscape-with-floorplan-brochure-template",
    embedding: null
  },
  {
    question: "How do I create a booklet in Eagle Software?",
    response: "To create a booklet, navigate to the Brochures section, select the Booklet option, add property details, images, and text, and then generate the booklet as a downloadable PDF. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717112-how-to-create-a-booklet",
    embedding: null
  },{
    question: "What Are 'Under the Radar Contacts'?",
    response: "Learn what 'Under the Radar Contacts' are in Eagle Software, how they can help you identify and manage less-visible leads, and how to use them effectively. More details: https://eaglesoftware.help/en/articles/7043386-what-are-under-the-radar-contacts",
    embedding: null
  },
  {
    question: "How to send a 'Just Listed' or 'Just Sold/Let' email to owners in the same street?",
    response: "This article explains how to send targeted emails to property owners in the same street when a property is just listed or sold/let. Follow the guidelines to set up your email campaign effectively. More details: https://eaglesoftware.help/en/articles/4530831-how-to-send-a-just-listed-or-just-sold-let-email-to-owners-in-the-same-street",
    embedding: null
  },
  {
    question: "Sending bulk SMS through the send SMS popup",
    response: "Discover how to send bulk SMS messages using Eagle Software's send SMS popup feature. This guide covers setup and best practices for successful SMS campaigns. More details: https://eaglesoftware.help/en/articles/4513989-sending-bulk-sms-through-the-send-sms-popup",
    embedding: null
  },
  {
    question: "Sending bulk emails through the send email popup",
    response: "Learn how to send bulk emails using the send email popup in Eagle Software. The article covers the steps to configure and execute bulk email campaigns. More details: https://eaglesoftware.help/en/articles/4513982-sending-bulk-emails-through-the-send-email-popup",
    embedding: null
  },
  {
    question: "Creating an email design",
    response: "This article explains how to create an effective email design in Eagle Software, covering layout, branding, and design tips. More details: https://eaglesoftware.help/en/articles/4034815-creating-an-email-design",
    embedding: null
  },
  {
    question: "How to Send Bulk Marketing Using Contact Preferences",
    response: "Learn how to send bulk marketing campaigns using contact preferences in Eagle Software to target the right contacts for your campaigns. More details: https://eaglesoftware.help/en/articles/3226043-how-to-send-bulk-marketing-using-contact-preferences",
    embedding: null
  },
  {
    question: "What do the Automatic Campaign emails look like?",
    response: "This article showcases the design and layout of automatic campaign emails in Eagle Software, helping you understand what recipients see. More details: https://eaglesoftware.help/en/articles/2717129-what-do-the-automatic-campaign-emails-look-like",
    embedding: null
  },
  {
    question: "Send Bulk Email Campaigns",
    response: "Find out how to set up and send bulk email campaigns using Eagle Software. The article provides step-by-step instructions to streamline your email marketing. More details: https://eaglesoftware.help/en/articles/2717124-send-bulk-email-campaigns",
    embedding: null
  },
  {
    question: "Email Reporting",
    response: "Learn how to access and interpret email reporting in Eagle Software to track the performance of your email campaigns. More details: https://eaglesoftware.help/en/articles/2717125-email-reporting",
    embedding: null
  },
  {
    question: "How to Send Bulk Marketing to Contacts Only Assigned to Me",
    response: "This article explains how to send bulk marketing campaigns specifically to contacts that are assigned to you, ensuring targeted outreach. More details: https://eaglesoftware.help/en/articles/3134940-how-to-send-bulk-marketing-to-contacts-only-assigned-to-me",
    embedding: null
  },
  {
    question: "How to change the colour styles for Email Design templates",
    response: "Discover how to change and customize the colour styles for your email design templates in Eagle Software to match your brand. More details: https://eaglesoftware.help/en/articles/2717130-how-to-change-the-colour-styles-for-email-design-templates",
    embedding: null
  },
  {
    question: "What do the Automatic Campaign emails look like? (Duplicate)",
    response: "This article showcases the design and layout of automatic campaign emails in Eagle Software. More details: https://eaglesoftware.help/en/articles/2717129-what-do-the-automatic-campaign-emails-look-like",
    embedding: null
  },
  {
    question: "Send Bulk Email Campaigns (Duplicate)",
    response: "Learn how to set up and send bulk email campaigns using Eagle Software. More details: https://eaglesoftware.help/en/articles/2717124-send-bulk-email-campaigns",
    embedding: null
  },
  {
    question: "Email Reporting (Duplicate)",
    response: "This article explains how to access and interpret email reporting in Eagle Software. More details: https://eaglesoftware.help/en/articles/2717125-email-reporting",
    embedding: null
  },
  {
    question: "How to Send Bulk Marketing to Contacts Only Assigned to Me (Duplicate)",
    response: "Discover how to send bulk marketing campaigns exclusively to contacts assigned to you. More details: https://eaglesoftware.help/en/articles/3134940-how-to-send-bulk-marketing-to-contacts-only-assigned-to-me",
    embedding: null
  },
  {
    question: "How to Send Bulk Marketing Using Contact Preferences (Duplicate)",
    response: "Learn how to send bulk marketing campaigns using contact preferences in Eagle Software. More details: https://eaglesoftware.help/en/articles/3226043-how-to-send-bulk-marketing-using-contact-preferences",
    embedding: null
  },
  {
    question: "What do the Automatic Campaign emails look like? (Duplicate)",
    response: "This article showcases the design and layout of automatic campaign emails in Eagle Software. More details: https://eaglesoftware.help/en/articles/2717129-what-do-the-automatic-campaign-emails-look-like",
    embedding: null
  },
  {
    question: "Send Bulk Email Campaigns (Duplicate)",
    response: "Learn how to set up and send bulk email campaigns using Eagle Software. More details: https://eaglesoftware.help/en/articles/2717124-send-bulk-email-campaigns",
    embedding: null
  },
  {
    question: "Email Reporting (Duplicate)",
    response: "This article explains how to access and interpret email reporting in Eagle Software. More details: https://eaglesoftware.help/en/articles/2717125-email-reporting",
    embedding: null
  },
  {
    question: "How to Send Bulk Marketing to Contacts Only Assigned to Me (Duplicate)",
    response: "Discover how to send bulk marketing campaigns exclusively to contacts assigned to you. More details: https://eaglesoftware.help/en/articles/3134940-how-to-send-bulk-marketing-to-contacts-only-assigned-to-me",
    embedding: null
  },{
    question: "How contacts are automatically added/removed from groups",
    response: "Learn how Eagle Software automatically adds or removes contacts from groups based on predefined rules. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4624394-how-contacts-are-automatically-added-removed-from-groups",
    embedding: null
  },
  {
    question: "Contact filter 'Last contacted'",
    response: "Discover how to use the 'Last contacted' filter to view contacts based on their most recent interactions. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4613962-contact-filter-last-contacted",
    embedding: null
  },
  {
    question: "How to manage a contact's 'subscribed' statuses",
    response: "Learn how to manage a contact's subscribed statuses in Eagle Software to control communications. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4436733-how-to-manage-a-contact-s-subscribed-statuses",
    embedding: null
  },
  {
    question: "Eagle Eye Explained",
    response: "Understand how Eagle Eye works in Eagle Software, helping you gain insights into your contacts and data. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4106215-eagle-eye-explained",
    embedding: null
  },
  {
    question: "What happens when you merge contacts?",
    response: "Learn what happens when contacts are merged in Eagle Software and how the process affects your database. For detailed instructions, visit: https://eaglesoftware.help/en/articles/3334086-what-happens-when-you-merge-contacts",
    embedding: null
  },
  {
    question: "How to Bulk Clean Duplicate Contacts",
    response: "Discover the steps to bulk clean duplicate contacts in Eagle Software, helping maintain an accurate database. For detailed instructions, visit: https://eaglesoftware.help/en/articles/3334059-how-to-bulk-clean-duplicate-contacts",
    embedding: null
  },
  {
    question: "Setup a mobile contact sync via Automations",
    response: "Learn how to set up mobile contact synchronization using automations in Eagle Software to keep your contact data up-to-date. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4024187-setup-a-mobile-contact-sync-via-automations",
    embedding: null
  },
  {
    question: "How do contact Preferences and Property Alerts work?",
    response: "Understand how contact preferences and property alerts operate in Eagle Software, enabling targeted communication and follow-ups. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717141-how-do-contact-preferences-and-property-alerts-work",
    embedding: null
  },
  {
    question: "How to assign Contacts to a new group and remove Contacts from an existing group",
    response: "Learn how to assign contacts to a new group and remove them from an existing group in Eagle Software for better organization. For detailed instructions, visit: https://eaglesoftware.help/en/articles/3202097-how-to-assign-contacts-to-a-new-group-and-remove-contacts-from-an-existing-group",
    embedding: null
  },
  {
    question: "How to merge contacts",
    response: "Discover the process of merging contacts in Eagle Software to eliminate duplicates and consolidate information. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717134-how-to-merge-contacts",
    embedding: null
  },
  {
    question: "How to build your database",
    response: "Learn how to build and manage your contact database effectively using Eagle Software. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717131-how-to-build-your-database",
    embedding: null
  },
  {
    question: "How do I know my email has been delivered?",
    response: "Find out how to check if your emails have been successfully delivered in Eagle Software. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717128-how-do-i-know-my-email-has-been-delivered",
    embedding: null
  },
  {
    question: "Contact Groups",
    response: "Learn how to manage and organize contact groups in Eagle Software. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717123-contact-groups",
    embedding: null
  },
  {
    question: "How Do I View Only My Own Contacts?",
    response: "Discover how to filter and view only your own contacts within Eagle Software. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717126-how-do-i-view-only-my-own-contacts",
    embedding: null
  },
  {
    question: "Setting up Mobile Contact Synchronization",
    response: "Learn how to set up mobile contact synchronization in Eagle Software to keep your contacts updated on your mobile device. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717092-setting-up-mobile-contact-synchronization",
    embedding: null
  },
  {
    question: "Eagle Swoop Email Address",
    response: "Find out how the Eagle Swoop Email Address feature works in Eagle Software for sending emails. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717089-eagle-swoop-email-address",
    embedding: null
  },
  {
    question: "Contact visibility explained",
    response: "Understand how contact visibility is managed in Eagle Software and what determines which contacts are visible. For detailed instructions, visit: https://eaglesoftware.help/en/articles/8884859-contact-visibility-explained",
    embedding: null
  },
  {
    question: "How to manage contact sources",
    response: "Learn how to manage the sources of your contacts in Eagle Software to ensure accurate tracking and segmentation. For detailed instructions, visit: https://eaglesoftware.help/en/articles/6452986-how-to-manage-contact-sources",
    embedding: null
  }, {
    question: "How do agent allocations and GST work in Eagle Software?",
    response: "In Eagle Software, agent allocations allow you to assign commission splits and manage agent responsibilities while GST is automatically calculated based on current tax regulations. This feature streamlines the accounting process and ensures compliance. For more details, visit: https://eaglesoftware.help/en/articles/5483257-agent-allocations-and-gst",
    embedding: null
  },
  {
    question: "How do I use checkboxes to monitor and edit a contract in Eagle Software?",
    response: "Eagle Software provides an intuitive interface where checkboxes allow you to quickly monitor key contract details and edit information as needed. Simply check or uncheck the relevant boxes to update contract statuses or trigger specific actions. For complete instructions, visit: https://eaglesoftware.help/en/articles/4458455-using-the-checkboxes-to-easily-monitor-and-edit-a-contract",
    embedding: null
  }, {
    question: "How do agent allocations and GST work in Eagle Software?",
    response: "In Eagle Software, agent allocations allow you to assign commission splits and manage agent responsibilities while GST is automatically calculated based on current tax regulations. This feature streamlines the accounting process and ensures compliance. For more details, visit: https://eaglesoftware.help/en/articles/5483257-agent-allocations-and-gst",
    embedding: null
  },
  {
    question: "How do I use checkboxes to monitor and edit a contract in Eagle Software?",
    response: "Eagle Software provides an intuitive interface where checkboxes allow you to quickly monitor key contract details and edit information as needed. Simply check or uncheck the relevant boxes to update contract statuses or trigger specific actions. For complete instructions, visit: https://eaglesoftware.help/en/articles/4458455-using-the-checkboxes-to-easily-monitor-and-edit-a-contract",
    embedding: null
  },{
    question: "How contacts are automatically added/removed from groups",
    response: "Learn how Eagle Software automatically adds or removes contacts from groups based on predefined rules. For detailed instructions, visit: https://eaglesoftware.help/en/articles/5483257-agent-allocations-and-gst",
    embedding: null
  },
  {
    question: "Contact filter 'Last contacted'",
    response: "Learn how to use the 'Last contacted' filter to view contacts based on their most recent interactions. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4613962-contact-filter-last-contacted",
    embedding: null
  },
  {
    question: "How to manage a contact's 'subscribed' statuses",
    response: "Learn how to manage a contact's subscribed statuses in Eagle Software to control communications. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4436733-how-to-manage-a-contact-s-subscribed-statuses",
    embedding: null
  },
  {
    question: "Eagle Eye Explained",
    response: "Understand how Eagle Eye works in Eagle Software, helping you gain insights into your contacts and data. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4106215-eagle-eye-explained",
    embedding: null
  },
  {
    question: "What happens when you merge contacts?",
    response: "Learn what happens when contacts are merged in Eagle Software and how the process affects your database. For detailed instructions, visit: https://eaglesoftware.help/en/articles/3334086-what-happens-when-you-merge-contacts",
    embedding: null
  },
  {
    question: "How to Bulk Clean Duplicate Contacts",
    response: "Discover how to bulk clean duplicate contacts in Eagle Software, helping maintain an accurate database. For detailed instructions, visit: https://eaglesoftware.help/en/articles/3334059-how-to-bulk-clean-duplicate-contacts",
    embedding: null
  },
  {
    question: "Setup a mobile contact sync via Automations",
    response: "Learn how to set up mobile contact synchronization using automations in Eagle Software to keep your contact data up-to-date. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4024187-setup-a-mobile-contact-sync-via-automations",
    embedding: null
  },
  {
    question: "How do contact Preferences and Property Alerts work?",
    response: "Understand how contact preferences and property alerts operate in Eagle Software, enabling targeted communication and follow-ups. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717141-how-do-contact-preferences-and-property-alerts-work",
    embedding: null
  },
  {
    question: "How to assign Contacts to a new group and remove Contacts from an existing group",
    response: "Learn how to assign contacts to a new group and remove them from an existing group in Eagle Software for better organization. For detailed instructions, visit: https://eaglesoftware.help/en/articles/3202097-how-to-assign-contacts-to-a-new-group-and-remove-contacts-from-an-existing-group",
    embedding: null
  },
  {
    question: "How to merge contacts",
    response: "Discover the process of merging contacts in Eagle Software to eliminate duplicates and consolidate information. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717134-how-to-merge-contacts",
    embedding: null
  },
  {
    question: "How to build your database",
    response: "Learn how to build and manage your contact database effectively using Eagle Software. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717131-how-to-build-your-database",
    embedding: null
  },
  {
    question: "How do I know my email has been delivered?",
    response: "Find out how to check if your emails have been successfully delivered in Eagle Software. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717128-how-do-i-know-my-email-has-been-delivered",
    embedding: null
  },
  {
    question: "Contact Groups",
    response: "Learn how to manage and organize contact groups in Eagle Software. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717123-contact-groups",
    embedding: null
  },
  {
    question: "How Do I View Only My Own Contacts?",
    response: "Discover how to filter and view only your own contacts within Eagle Software. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717126-how-do-i-view-only-my-own-contacts",
    embedding: null
  },
  {
    question: "Setting up Mobile Contact Synchronization",
    response: "Learn how to set up mobile contact synchronization in Eagle Software to keep your contacts updated on your mobile device. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717092-setting-up-mobile-contact-synchronization",
    embedding: null
  },
  {
    question: "Eagle Swoop Email Address",
    response: "Find out how the Eagle Swoop Email Address feature works in Eagle Software for sending emails. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2717089-eagle-swoop-email-address",
    embedding: null
  },
  {
    question: "Contact visibility explained",
    response: "Understand how contact visibility is managed in Eagle Software and what determines which contacts are visible. For detailed instructions, visit: https://eaglesoftware.help/en/articles/8884859-contact-visibility-explained",
    embedding: null
  },
  {
    question: "How to manage contact sources",
    response: "Learn how to manage the sources of your contacts in Eagle Software to ensure accurate tracking and segmentation. For detailed instructions, visit: https://eaglesoftware.help/en/articles/6452986-how-to-manage-contact-sources",
    embedding: null
  }, {
    question: "Tasks have moved to the Activity Feed",
    response: "In Eagle Software, tasks are now displayed in the Activity Feed for improved visibility and tracking. For full details, visit: https://eaglesoftware.help/en/articles/5343408-tasks-have-moved-to-the-activity-feed",
    embedding: null
  },
  {
    question: "How to add/remove the auction time and location from the listing?",
    response: "This article explains how you can add or remove the auction time and location from a listing in Eagle Software, ensuring your listing information remains up-to-date. For complete instructions, visit: https://eaglesoftware.help/en/articles/4743724-how-to-add-remove-the-auction-time-and-location-from-the-listing",
    embedding: null
  },
  {
    question: "What is the Eagle Feedback Portal?",
    response: "The Eagle Feedback Portal allows users to provide feedback about Eagle Software, which helps improve the product and service. For more details, visit: https://eaglesoftware.help/en/articles/4509277-eagle-feedback-portal",
    embedding: null
  },
  {
    question: "What is my browser's cache and how do I clear it?",
    response: "This article explains what your browser's cache is, why it's important, and provides steps on how to clear it for optimal performance. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4174867-what-is-my-browser-s-cache-and-how-do-i-clear-it",
    embedding: null
  },
  {
    question: "What is the maximum size an email attachment can be?",
    response: "Learn about the maximum size allowed for email attachments in Eagle Software and how to optimize your attachments for successful email delivery. For more details, visit: https://eaglesoftware.help/en/articles/3659071-what-is-the-maximum-size-an-email-attachment-can-be",
    embedding: null
  },
  {
    question: "How does Eagle process client feedback?",
    response: "This article details how Eagle Software processes client feedback to continuously improve its services. For more information, visit: https://eaglesoftware.help/en/articles/3486374-how-eagle-processes-client-feedback",
    embedding: null
  },
  {
    question: "How do I share my properties on Facebook using Eagle Software?",
    response: "Learn how to share your properties on Facebook directly from Eagle Software, including step-by-step instructions and best practices. For more details, visit: https://eaglesoftware.help/en/articles/2717085-sharing-your-properties-on-facebook",
    embedding: null
  },
  {
    question: "How can I change the settings around my daily task reminder email from Eagle?",
    response: "This article explains how to modify the settings for your daily task reminder emails in Eagle Software, so you can customize the content and frequency as needed. For complete instructions, visit: https://eaglesoftware.help/en/articles/3137802-how-to-change-the-settings-around-your-daily-task-reminder-email-from-eagle",
    embedding: null
  },
  {
    question: "How can I secure my account with multifactor authentication through Okta?",
    response: "Secure your Eagle Software account by enabling multifactor authentication (MFA) through Okta. This article provides detailed steps and explains the benefits of MFA. For more details, visit: https://eaglesoftware.help/en/articles/9081351-secure-your-account-today-multifactor-authentication-through-okta",
    embedding: null
  },
  {
    question: "How do I update Eagle to reflect changes to my business?",
    response: "This article explains how to update Eagle Software so that it reflects changes in your business, ensuring your account stays current with your evolving needs. For full details, visit: https://eaglesoftware.help/en/articles/9489235-updating-eagle-to-reflect-changes-to-your-business",
    embedding: null
  },  {
    question: "Bank Accounts in Eagle",
    response: "This article explains how bank accounts are managed in Eagle Software. It covers how to add, edit, and view bank accounts to ensure your financial data is up to date. For full details, visit: https://eaglesoftware.help/en/articles/6091260-bank-accounts-in-eagle",
    embedding: null
  },
  {
    question: "How to setup a custom HTML email signature",
    response: "Learn how to create and configure a custom HTML email signature in Eagle Software to reflect your branding. The article walks you through the setup process and customization options. For more details, visit: https://eaglesoftware.help/en/articles/5539354-how-to-setup-a-custom-html-email-signature",
    embedding: null
  },
  {
    question: "How to use Pipelines and Deals",
    response: "This article explains how to use the Pipelines and Deals features in Eagle Software to manage your sales process effectively. It covers setup, configuration, and best practices. For full instructions, visit: https://eaglesoftware.help/en/articles/6018293-how-to-use-pipelines-and-deals",
    embedding: null
  },
  {
    question: "Two-Factor Authentication (2FA)",
    response: "Enhance the security of your Eagle Software account by enabling Two-Factor Authentication (2FA). This article provides step-by-step instructions for setting up 2FA. For more information, visit: https://eaglesoftware.help/en/articles/5390376-two-factor-authentication-2fa",
    embedding: null
  },
  {
    question: "How to use segments",
    response: "Learn how to use segments in Eagle Software to organize and target your contacts more efficiently. The article explains how to create, manage, and utilize segments for your marketing efforts. For detailed guidance, visit: https://eaglesoftware.help/en/articles/5168073-how-to-use-segments",
    embedding: null
  },
  {
    question: "Interactive Owner Portal",
    response: "Discover the features of the Interactive Owner Portal in Eagle Software. This article explains how the portal enables owners to view property details, updates, and more. For complete instructions, visit: https://eaglesoftware.help/en/articles/4990297-interactive-owner-portal",
    embedding: null
  },
  {
    question: "How to check for bounced/failed emails from your connected email sync account",
    response: "This article details how to monitor your connected email sync account for bounced or failed emails, helping you ensure successful communication. For full instructions, visit: https://eaglesoftware.help/en/articles/4740339-how-to-check-for-bounced-failed-emails-from-your-connected-email-sync-account",
    embedding: null
  },
  {
    question: "QR Code Inspection Check-Ins",
    response: "Learn how to perform QR Code Inspection Check-Ins within Eagle Software to track property visits or events. For step-by-step instructions, visit: https://eaglesoftware.help/en/articles/4613786-qr-code-inspection-check-ins",
    embedding: null
  },
  {
    question: "How a Property Looks in an Email",
    response: "This article shows you how properties are presented in email campaigns generated by Eagle Software. It covers layout, image usage, and design tips. For more details, visit: https://eaglesoftware.help/en/articles/3668168-how-a-property-looks-in-an-email",
    embedding: null
  },
  {
    question: "How to setup and manage Teams",
    response: "Learn how to setup and manage Teams within Eagle Software, including adding, editing, and assigning team members for better collaboration. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4492013-how-to-setup-and-manage-teams",
    embedding: null
  },
  {
    question: "What are Template Tags?",
    response: "Template Tags in Eagle Software are placeholders that automatically insert dynamic data into emails, brochures, and other communications. This article explains how to use them effectively. For more details, visit: https://eaglesoftware.help/en/articles/4024395-what-are-template-tags",
    embedding: null
  },
  {
    question: "How Open Tracking Works On Emails",
    response: "This article explains how open tracking is implemented in Eagle Software to monitor email engagement. It details the mechanisms behind tracking and the insights you can gain. For complete instructions, visit: https://eaglesoftware.help/en/articles/3213789-how-open-tracking-works-on-emails",
    embedding: null
  },
  {
    question: "How SMS notifications work",
    response: "Learn how SMS notifications are set up and function within Eagle Software. The article covers the configuration process and how notifications are sent. For more details, visit: https://eaglesoftware.help/en/articles/4089524-how-sms-notifications-work",
    embedding: null
  },
  {
    question: "How to Setup Inbound SMS Code Words",
    response: "This article describes how to setup inbound SMS code words in Eagle Software to filter and route incoming SMS messages effectively. For detailed instructions, visit: https://eaglesoftware.help/en/articles/2862392-how-to-setup-inbound-sms-code-words",
    embedding: null
  },
  {
    question: "How to log into Eagle",
    response: "Learn the steps to log into Eagle Software, including troubleshooting common login issues. For more details, visit: https://eaglesoftware.help/en/articles/2717107-how-to-log-into-eagle",
    embedding: null
  },
  {
    question: "Uploading Images to Website Pages and Emails",
    response: "This article explains how to upload images to website pages and emails within Eagle Software to ensure they display correctly. For full instructions, visit: https://eaglesoftware.help/en/articles/2717087-uploading-images-to-website-pages-and-emails",
    embedding: null
  },
  {
    question: "October 2024 Maintenance guide",
    response: "Review the October 2024 Maintenance guide for Eagle Software, which outlines updates, best practices, and troubleshooting tips for keeping your system running smoothly. For more details, visit: https://eaglesoftware.help/en/articles/9945856-october-2024-maintenance-guide",
    embedding: null
  }, {
    question: "Calendar invites being sent as incorrect time",
    response: "This article explains why calendar invites in Eagle Software might be sent with an incorrect time and provides troubleshooting steps to fix the issue. For detailed instructions, visit: https://eaglesoftware.help/en/articles/4045723-calendar-invites-being-sent-as-incorrect-time",
    embedding: null
  },
  {
    question: "How to set up Inspection Bookings settings",
    response: "Learn how to configure the Inspection Bookings settings in Eagle Software to streamline your property inspections. This article covers the steps to set up and manage inspection bookings effectively. For more details, visit: https://eaglesoftware.help/en/articles/3837581-how-to-set-up-inspection-bookings-settings",
    embedding: null
  },{
    question: "Integration with YourPorter",
    response: "Learn how Eagle Software integrates with YourPorter to streamline your workflows and data synchronization. For more details, visit: https://eaglesoftware.help/en/articles/6366339-integration-with-yourporter",
    embedding: null
  },
  {
    question: "Integration with Compare & Connect",
    response: "Discover how Eagle Software integrates with Compare & Connect to enhance property comparisons and client insights. For more details, visit: https://eaglesoftware.help/en/articles/6363566-integration-with-compare-connect",
    embedding: null
  },
  {
    question: "Integration with Social Eazie",
    response: "Learn about the integration between Eagle Software and Social Eazie, which helps automate social marketing efforts. For more details, visit: https://eaglesoftware.help/en/articles/6343529-integration-with-social-eazie",
    embedding: null
  },
  {
    question: "Integration with Propps",
    response: "Find out how Eagle Software integrates with Propps to improve property data management and workflow automation. For more details, visit: https://eaglesoftware.help/en/articles/6113444-integration-with-propps",
    embedding: null
  },
  {
    question: "Integration with RiTA",
    response: "Learn how Eagle Software integrates with RiTA to expand your connectivity and data management capabilities. For more details, visit: https://eaglesoftware.help/en/articles/6038503-integration-with-rita",
    embedding: null
  },
  {
    question: "Listing Loop integration",
    response: "Discover how to leverage Listing Loop integration within Eagle Software to automate listing updates and streamline workflows. For more details, visit: https://eaglesoftware.help/en/articles/5479956-listing-loop-integration",
    embedding: null
  },
  {
    question: "Integration with Realtair",
    response: "Learn how Eagle Software integrates with Realtair to enhance property marketing and client communications. For more details, visit: https://eaglesoftware.help/en/articles/6559247-integration-with-realtair",
    embedding: null
  },
  {
    question: "Integration with Fast Connect",
    response: "Understand how Eagle Software’s Fast Connect integration improves data connectivity and speeds up transaction processes. For more details, visit: https://eaglesoftware.help/en/articles/6366420-integration-with-fast-connect",
    embedding: null
  },
  {
    question: "Integration with CampaignAgent",
    response: "Discover how Eagle Software integrates with CampaignAgent to boost your marketing campaigns and automate communications. For more details, visit: https://eaglesoftware.help/en/articles/5369023-integration-with-campaignagent",
    embedding: null
  },
  {
    question: "How to send an advertising payment request with Rello",
    response: "Learn how to send an advertising payment request with Rello through Eagle Software to streamline payment processes. For more details, visit: https://eaglesoftware.help/en/articles/6091221-how-to-send-an-advertising-payment-request-with-rello",
    embedding: null
  },
  {
    question: "VideoPunch integration",
    response: "Discover how VideoPunch integration within Eagle Software enhances video content management and marketing efforts. For more details, visit: https://eaglesoftware.help/en/articles/5118942-videopunch-integration",
    embedding: null
  },
  {
    question: "Dripflow.io Integration",
    response: "Learn how Eagle Software integrates with Dripflow.io to automate drip marketing campaigns and improve lead nurturing. For more details, visit: https://eaglesoftware.help/en/articles/5084115-dripflow-io-integration",
    embedding: null
  },
  {
    question: "REI Forms Live / Forms Live / Realworks Integration",
    response: "Explore how Eagle Software integrates with REI Forms Live, Forms Live, and Realworks to streamline form management and data collection. For more details, visit: https://eaglesoftware.help/en/articles/4447436-rei-forms-live-forms-live-realworks-integration",
    embedding: null
  },
  {
    question: "Homepass Integration",
    response: "Find out how Eagle Software integrates with Homepass to simplify property management and enhance workflow efficiency. For more details, visit: https://eaglesoftware.help/en/articles/4344728-homepass-integration",
    embedding: null
  },
  {
    question: "Vxt Integration",
    response: "Learn how Eagle Software integrates with Vxt to improve communication and streamline business processes. For more details, visit: https://eaglesoftware.help/en/articles/4547573-vxt-integration",
    embedding: null
  },
  {
    question: "How to create an API key",
    response: "This article explains the process of creating an API key in Eagle Software to enable secure integrations with third-party applications. For more details, visit: https://eaglesoftware.help/en/articles/4065172-how-to-create-an-api-key",
    embedding: null
  },
  {
    question: "How to set up an email parser",
    response: "Learn how to set up an email parser in Eagle Software to automatically extract and process data from incoming emails. For more details, visit: https://eaglesoftware.help/en/articles/4170575-how-to-set-up-an-email-parser",
    embedding: null
  },
  {
    question: "ActivePipe Integration",
    response: "Discover how Eagle Software integrates with ActivePipe to enhance email marketing automation and performance tracking. For more details, visit: https://eaglesoftware.help/en/articles/4044998-activepipe-integration",
    embedding: null
  },
  {
    question: "Whitelist Eagle Software For GSuite Synchronisation",
    response: "Learn how to whitelist Eagle Software to ensure smooth GSuite synchronization and uninterrupted data flow. For more details, visit: https://eaglesoftware.help/en/articles/3547746-whitelist-eagle-software-for-gsuite-synchronisation",
    embedding: null
  },
  {
    question: "Market Buy Integration",
    response: "This article explains how Eagle Software’s Market Buy Integration helps streamline property buying processes and marketing efforts. For more details, visit: https://eaglesoftware.help/en/articles/3848012-market-buy-integration",
    embedding: null
  },
  {
    question: "Learn How to Send Emails Using Your Connected Email Account",
    response: "Discover how to send emails using your connected email account in Eagle Software for efficient communication. For more details, visit: https://eaglesoftware.help/en/articles/3305503-learn-how-to-send-emails-using-your-connected-email-account",
    embedding: null
  },
  {
    question: "How to setup Rello integration",
    response: "Learn the steps to set up Rello integration in Eagle Software to streamline your advertising and payment processes. For more details, visit: https://eaglesoftware.help/en/articles/5703062-how-to-setup-rello-integration",
    embedding: null
  },
  {
    question: "Automatically sharing your properties on your Company LinkedIn profile",
    response: "This article shows how Eagle Software can automatically share your properties on your company LinkedIn profile to boost exposure. For more details, visit: https://eaglesoftware.help/en/articles/3652678-automatically-sharing-your-properties-on-your-company-linkedin-profile",
    embedding: null
  },
  {
    question: "Why is the Core Logic integration not working?",
    response: "Understand common issues and troubleshooting steps when the Core Logic integration in Eagle Software is not working properly. For more details, visit: https://eaglesoftware.help/en/articles/4023971-why-is-the-core-logic-integration-not-working",
    embedding: null
  },
  {
    question: "Automatically sharing your properties on your Personal LinkedIn profile",
    response: "Learn how Eagle Software can automatically share your properties on your personal LinkedIn profile for enhanced networking. For more details, visit: https://eaglesoftware.help/en/articles/3649519-automatically-sharing-your-properties-on-your-personal-linkedin-profile",
    embedding: null
  },
  {
    question: "How to Sync Your Eagle Contact Groups to Facebook Custom Audiences",
    response: "This article details how to sync your Eagle contact groups to Facebook Custom Audiences, enabling targeted marketing campaigns. For more details, visit: https://eaglesoftware.help/en/articles/2983227-how-to-sync-your-eagle-contact-groups-to-facebook-custom-audiences",
    embedding: null
  },
  {
    question: "Movinghub utility connections",
    response: "Learn how to manage Movinghub utility connections within Eagle Software for streamlined data integration and reporting. For more details, visit: https://eaglesoftware.help/en/articles/2739488-movinghub-utility-connections",
    embedding: null
  },
  {
    question: "Integrating with Zapier",
    response: "Discover how to integrate Eagle Software with Zapier to automate workflows and connect with hundreds of other apps. For more details, visit: https://eaglesoftware.help/en/articles/2717150-integrating-with-zapier",
    embedding: null
  },
  {
    question: "How to setup PropertyMe integration",
    response: "Learn how to set up the PropertyMe integration in Eagle Software to enhance property management and streamline operations. For more details, visit: https://eaglesoftware.help/en/articles/2717146-how-to-setup-propertyme-integration",
    embedding: null
  },
  {
    question: "How to Setup Calendar Sync",
    response: "This article provides instructions on setting up calendar synchronization in Eagle Software to keep your appointments and tasks up-to-date. For more details, visit: https://eaglesoftware.help/en/articles/3103258-how-to-setup-calendar-sync",
    embedding: null
  },
  {
    question: "About the Property Tree integration",
    response: "Learn how the Property Tree integration in Eagle Software helps manage and display property data effectively. For more details, visit: https://eaglesoftware.help/en/articles/9082155-about-the-property-tree-integration",
    embedding: null
  },
  {
    question: "Pushing information to Property Tree",
    response: "This article explains how to push information to Property Tree from Eagle Software, ensuring seamless data updates and display. For more details, visit: https://eaglesoftware.help/en/articles/9110650-pushing-information-to-property-tree",
    embedding: null
  },
  {
    question: "About the Agora Insights integration",
    response: "Discover how the Agora Insights integration in Eagle Software provides actionable analytics and data-driven insights for your business. For more details, visit: https://eaglesoftware.help/en/articles/9613658-about-the-agora-insights-integration",
    embedding: null
  }, {
    question: "How do I import leads from Facebook?",
    response: "To import leads from Facebook in Eagle Software, follow the step-by-step instructions provided in the article. For detailed guidance, visit: https://eaglesoftware.help/en/articles/2845623-lead-importing-from-facebook",
    embedding: null
  },
  {
    question: "How do I configure REA (realestate.com.au) to automatically import contacts?",
    response: "Learn how to set up the integration with REA (realestate.com.au) so that contacts are automatically imported into Eagle Software. For complete instructions, visit: https://eaglesoftware.help/en/articles/2717090-configure-rea-realestate-com-au-to-automatically-import-contacts",
    embedding: null
  },
  {
    question: "How do I setup automatic contact and enquiries import from View.com.au?",
    response: "This article explains how to configure Eagle Software to automatically import contacts and enquiries from View.com.au. For detailed guidance, visit: https://eaglesoftware.help/en/articles/2717096-setup-automatic-contact-and-enquiries-import-from-view-com-au",
    embedding: null
  },
  {
    question: "How do I setup automatic contact and enquiries import from AllHomes?",
    response: "Follow the instructions to set up automatic import of contacts and enquiries from AllHomes into Eagle Software. For full details, visit: https://eaglesoftware.help/en/articles/2717093-setup-automatic-contact-and-enquiries-import-from-allhomes",
    embedding: null
  },
  {
    question: "How do I setup automatic contact and enquiries import from Rent.com.au?",
    response: "Learn how to configure Eagle Software for the automatic import of contacts and enquiries from Rent.com.au. For complete setup instructions, visit: https://eaglesoftware.help/en/articles/2717094-setup-automatic-contact-and-enquiries-import-from-rent-com-au",
    embedding: null
  },
  {
    question: "How do I setup automatic contact and enquiries import from Homely?",
    response: "This article explains how to set up automatic contact and enquiries import from Homely into Eagle Software. For full details, visit: https://eaglesoftware.help/en/articles/10071213-setup-automatic-contact-and-enquiries-import-from-homely",
    embedding: null
  }, {
    question: "How do I use Eagle Caller ID for Android in Eagle Software?",
    response: "Eagle Caller ID for Android allows you to manage calls on your Android device. For more details, visit: https://eaglesoftware.help/en/articles/5264000-eagle-caller-id-for-android",
    embedding: null
  },
  {
    question: "How do I join the mobile app beta program in Eagle Software?",
    response: "Join the mobile app beta program to gain early access to new features. For more details, visit: https://eaglesoftware.help/en/articles/4475272-how-to-join-the-mobile-app-beta-program",
    embedding: null
  },
  {
    question: "How do I use Eagle Caller ID for iOS in Eagle Software?",
    response: "Eagle Caller ID for iOS allows you to manage calls on your iOS device. For more details, visit: https://eaglesoftware.help/en/articles/5976863-eagle-caller-id-for-ios",
    embedding: null
  },
  {
    question: "How do I access listings via the EagleCRM App in Eagle Software?",
    response: "Access your property listings on the go using the EagleCRM App. For more details, visit: https://eaglesoftware.help/en/articles/5178485-accessing-listings-via-the-eaglecrm-app",
    embedding: null
  },
  {
    question: "How do I log an inspection attendee in Eagle Software?",
    response: "Eagle Software provides a feature to log inspection attendees during property inspections. For more details, visit: https://eaglesoftware.help/en/articles/2717143-how-to-log-an-inspection-attendee",
    embedding: null
  },
  {
    question: "How do I manage tasks using the EagleCRM App in Eagle Software?",
    response: "Manage your tasks effectively with the EagleCRM App. For more details, visit: https://eaglesoftware.help/en/articles/5178552-using-eaglecrm-to-manage-tasks",
    embedding: null
  },
  {
    question: "How do I get started with Eagle Caller ID Mobile App Permissions?",
    response: "The Quick Start Guide for Eagle Caller ID Mobile App Permissions helps you set up the necessary permissions on your device. For more details, visit: https://eaglesoftware.help/en/articles/5142994-quick-start-guide-eagle-caller-id-mobile-app-permissions",
    embedding: null
  },
  {
    question: "How do I manage contacts through the EagleCRM App in Eagle Software?",
    response: "Manage your contacts easily using the EagleCRM App. For more details, visit: https://eaglesoftware.help/en/articles/5168545-managing-contacts-through-eaglecrm-app",
    embedding: null
  },
  {
    question: "How do I manage appraisals via the EagleCRM App in Eagle Software?",
    response: "Eagle Software allows you to manage property appraisals through the EagleCRM App. For more details, visit: https://eaglesoftware.help/en/articles/5178539-manage-appraisals-via-the-eaglecrm-app",
    embedding: null
  },
  {
    question: "How do I manage enquiries through the EagleCRM App in Eagle Software?",
    response: "Handle enquiries effectively using the EagleCRM App. For more details, visit: https://eaglesoftware.help/en/articles/5178550-managing-enquiries-through-eaglecrm-app",
    embedding: null
  },
  {
    question: "How do I download the Eagle CRM Mobile App?",
    response: "Download the Eagle CRM Mobile App to access your data on the go. For more details, visit: https://eaglesoftware.help/en/articles/2717086-how-to-download-the-eagle-crm-mobile-app",
    embedding: null
  },{
  question: "How do I create a label compaign",
  response :"https://eaglesoftware.help/en/articles/4798111-how-to-generate-a-label-campaign",
  embedding: null},
  {
    question: "How do I call a contact using the EagleCRM Mobile App in Eagle Software?",
    response: "Make calls to your contacts using the EagleCRM Mobile App. For more details, visit: https://eaglesoftware.help/en/articles/8654839-calling-a-contact-via-the-eaglecrm-mobile-app",
    embedding: null
  },{ 
    question: "How do I troubleshoot video not uploading to REIWA in Eagle Software?",
    response: "If your video is not uploading to REIWA, check your file format and network connection. For detailed troubleshooting steps, visit: https://eaglesoftware.help/en/articles/4039597-video-not-uploading-to-reiwa",
    embedding: null
  },
  
  { 
    question: "How do I set Eagle as my bulk uploader for RealEstate.com.au in Eagle Software?",
    response: "Set Eagle as your bulk uploader for RealEstate.com.au to streamline data import. For instructions, visit: https://eaglesoftware.help/en/articles/3454173-set-eagle-as-your-bulk-uploader-for-realestate-com-au",
    embedding: null
  },
  { 
    question: "How do I manage portal pushing in Eagle Software?",
    response: "Manage your portal pushing settings to control listing distribution. For detailed steps, visit: https://eaglesoftware.help/en/articles/3211244-managing-your-portal-pushing",
    embedding: null
  },
  { 
    question: "How do I upload conjunctional agents to portals in Eagle Software?",
    response: "Upload conjunctional agents to portals using Eagle Software’s interface. For guidance, visit: https://eaglesoftware.help/en/articles/6452854-how-to-upload-conjunctional-agents-to-portals",
    embedding: null
  },
  { 
    question: "How do I withdraw a listing in Eagle Software?",
    response: "Withdraw a listing by using the designated feature in Eagle Software. For instructions, visit: https://eaglesoftware.help/en/articles/2717162-how-to-withdraw-a-listing",
    embedding: null
  },
  { 
    question: "How do I manage portal pushing in Eagle Software?",
    response: "Learn how to manage portal pushing settings effectively. For more information, visit: https://eaglesoftware.help/en/articles/2717160-how-to-manage-portal-pushing",
    embedding: null
  },
  { 
    question: "What is the difference between Auto Update and Push Now in Eagle Software?",
    response: "Auto Update and Push Now are two distinct features in Eagle Software. For a detailed explanation, visit: https://eaglesoftware.help/en/articles/3141383-what-is-the-difference-between-auto-update-and-push-now",
    embedding: null
  },
  { 
    question: "What does 'Invalid commercial authority' mean in Eagle Software?",
    response: "Invalid commercial authority indicates an issue with your account permissions in Eagle Software. For more details, visit: https://eaglesoftware.help/en/articles/2717159-invalid-commercial-authority",
    embedding: null
  },
  { 
    question: "How do I perform portal pushing to Realestate.co.nz in Eagle Software?",
    response: "Configure portal pushing to Realestate.co.nz to ensure your listings are distributed properly. For instructions, visit: https://eaglesoftware.help/en/articles/2717158-portal-pushing-to-realestate-co-nz",
    embedding: null
  },
  { 
    question: "What happens if a property I marked as let is not removed in Eagle Software?",
    response: "If a property marked as let is not removed, it may indicate a synchronization issue. For troubleshooting steps, visit: https://eaglesoftware.help/en/articles/2717155-a-property-i-marked-as-let-has-not-been-removed",
    embedding: null
  },
  { 
    question: "What are the Price Types on TradeMe in Eagle Software?",
    response: "Eagle Software offers various Price Types for listings on TradeMe. For more details, visit: https://eaglesoftware.help/en/articles/2717154-price-types-on-trademe",
    embedding: null
  },
  { 
    question: "How do I perform portal pushing to REIWA in Eagle Software?",
    response: "Portal pushing to REIWA is managed within Eagle Software to ensure efficient listing distribution. For complete details, visit: https://eaglesoftware.help/en/articles/2717120-portal-pushing-to-reiwa",
    embedding: null
  },
  { 
    question: "What embedded content formats are supported for Homes.co.nz in Eagle Software?",
    response: "Eagle Software supports specific embedded content formats for Homes.co.nz. For a full list, visit: https://eaglesoftware.help/en/articles/4841293-homes-co-nz-embedded-content-supported-formats",
    embedding: null
  },
  { 
    question: "How do I upload a commercial listing to portals in Eagle Software?",
    response: "Uploading a commercial listing to portals is streamlined in Eagle Software. For instructions, visit: https://eaglesoftware.help/en/articles/8763490-uploading-a-commercial-listing-to-portals",
    embedding: null
  },
  { 
    question: "How do I upload a sold listing to portals for the first time in Eagle Software?",
    response: "If you're uploading a sold listing to portals for the first time, follow the step-by-step guide provided in Eagle Software. For more details, visit: https://eaglesoftware.help/en/articles/9398109-uploading-a-sold-listing-to-portals-for-the-first-time",
    embedding: null
  },{ 
    question: "How do I troubleshoot video not uploading to REIWA in Eagle Software?",
    response: "If your video is not uploading to REIWA, ensure your file meets the required format and size specifications, and check your network connection. For detailed troubleshooting steps, visit: https://eaglesoftware.help/en/articles/4039597-video-not-uploading-to-reiwa",
    embedding: null
  },
 
  { 
    question: "How do I set Eagle as my bulk uploader for RealEstate.com.au in Eagle Software?",
    response: "Set Eagle as your bulk uploader for RealEstate.com.au to streamline data import processes. For instructions, visit: https://eaglesoftware.help/en/articles/3454173-set-eagle-as-your-bulk-uploader-for-realestate-com-au",
    embedding: null
  },
  { 
    question: "How do I manage portal pushing in Eagle Software?",
    response: "Manage your portal pushing settings in Eagle Software to control how your listings are distributed. For detailed steps, visit: https://eaglesoftware.help/en/articles/3211244-managing-your-portal-pushing",
    embedding: null
  },
  { 
    question: "How do I upload conjunctional agents to portals in Eagle Software?",
    response: "Upload conjunctional agents to portals using Eagle Software’s interface. For guidance, visit: https://eaglesoftware.help/en/articles/6452854-how-to-upload-conjunctional-agents-to-portals",
    embedding: null
  },
  { 
    question: "How do I withdraw a listing in Eagle Software?",
    response: "Withdraw a listing by using the designated feature in Eagle Software. For instructions, visit: https://eaglesoftware.help/en/articles/2717162-how-to-withdraw-a-listing",
    embedding: null
  },
  { 
    question: "How do I manage portal pushing (alternative) in Eagle Software?",
    response: "Learn how to manage portal pushing settings effectively in Eagle Software. For more details, visit: https://eaglesoftware.help/en/articles/2717160-how-to-manage-portal-pushing",
    embedding: null
  },
  { 
    question: "What is the difference between Auto Update and Push Now in Eagle Software?",
    response: "Auto Update and Push Now are two distinct features in Eagle Software for updating listings. For a detailed explanation, visit: https://eaglesoftware.help/en/articles/3141383-what-is-the-difference-between-auto-update-and-push-now",
    embedding: null
  },
  { 
    question: "What does 'Invalid commercial authority' mean in Eagle Software?",
    response: "Invalid commercial authority indicates an issue with account permissions for commercial listings in Eagle Software. For more details, visit: https://eaglesoftware.help/en/articles/2717159-invalid-commercial-authority",
    embedding: null
  },
  { 
    question: "How do I perform portal pushing to Realestate.co.nz in Eagle Software?",
    response: "Configure portal pushing to Realestate.co.nz to ensure proper distribution of your listings. For instructions, visit: https://eaglesoftware.help/en/articles/2717158-portal-pushing-to-realestate-co-nz",
    embedding: null
  },
  { 
    question: "What should I do if a property I marked as let is not removed in Eagle Software?",
    response: "If a property marked as let is not removed, it may indicate a synchronization issue. For troubleshooting steps, visit: https://eaglesoftware.help/en/articles/2717155-a-property-i-marked-as-let-has-not-been-removed",
    embedding: null
  },
  { 
    question: "What are the Price Types on TradeMe in Eagle Software?",
    response: "Eagle Software offers various Price Types for listings on TradeMe to cater to different market segments. For more details, visit: https://eaglesoftware.help/en/articles/2717154-price-types-on-trademe",
    embedding: null
  },
  { 
    question: "How do I perform portal pushing to REIWA in Eagle Software?",
    response: "Portal pushing to REIWA is managed within Eagle Software to ensure efficient listing distribution. For complete details, visit: https://eaglesoftware.help/en/articles/2717120-portal-pushing-to-reiwa",
    embedding: null
  },
  { 
    question: "What embedded content formats are supported for Homes.co.nz in Eagle Software?",
    response: "Eagle Software supports specific embedded content formats for Homes.co.nz. For a full list, visit: https://eaglesoftware.help/en/articles/4841293-homes-co-nz-embedded-content-supported-formats",
    embedding: null
  },
  { 
    question: "How do I upload a commercial listing to portals in Eagle Software?",
    response: "Uploading a commercial listing to portals is streamlined in Eagle Software. For instructions, visit: https://eaglesoftware.help/en/articles/8763490-uploading-a-commercial-listing-to-portals",
    embedding: null
  },
  { 
    question: "How do I upload a sold listing to portals for the first time in Eagle Software?",
    response: "For first-time uploading of a sold listing to portals, follow the step-by-step guide in Eagle Software. For more details, visit: https://eaglesoftware.help/en/articles/9398109-uploading-a-sold-listing-to-portals-for-the-first-time",
    embedding: null
  },{
    question: "How do I troubleshoot when video is not uploading to REIWA?",
    response: "If your video isn’t uploading to REIWA, check that the file meets the required format and size and verify your network connection. For more details, visit: https://eaglesoftware.help/en/articles/4039597-video-not-uploading-to-reiwa",
    embedding: null
  },
  
  {
    question: "How do I set Eagle as my bulk uploader for RealEstate.com.au?",
    response: "Configure Eagle Software as your bulk uploader for RealEstate.com.au to streamline your import process. More details are available at: https://eaglesoftware.help/en/articles/3454173-set-eagle-as-your-bulk-uploader-for-realestate-com-au",
    embedding: null
  },
  {
    question: "How do I manage portal pushing?",
    response: "Manage your portal pushing settings to ensure your listings are properly distributed. For instructions, visit: https://eaglesoftware.help/en/articles/3211244-managing-your-portal-pushing",
    embedding: null
  },
  {
    question: "How do I upload conjunctional agents to portals?",
    response: "Upload conjunctional agents to portals by following the step-by-step guide provided at: https://eaglesoftware.help/en/articles/6452854-how-to-upload-conjunctional-agents-to-portals",
    embedding: null
  },
  {
    question: "How do I withdraw a listing?",
    response: "Withdraw a listing using Eagle Software’s dedicated feature. For step-by-step instructions, see: https://eaglesoftware.help/en/articles/2717162-how-to-withdraw-a-listing",
    embedding: null
  },
  {
    question: "How do I manage portal pushing (alternative method)?",
    response: "An alternative method to manage portal pushing is available. Learn more at: https://eaglesoftware.help/en/articles/2717160-how-to-manage-portal-pushing",
    embedding: null
  },
  {
    question: "What is the difference between Auto Update and Push Now?",
    response: "Auto Update automatically refreshes listings while Push Now forces an immediate update. For a detailed explanation, check: https://eaglesoftware.help/en/articles/3141383-what-is-the-difference-between-auto-update-and-push-now",
    embedding: null
  },
  {
    question: "What does 'Invalid commercial authority' mean?",
    response: "This error indicates that your account does not have permission to upload commercial ads. More information is available at: https://eaglesoftware.help/en/articles/2717159-invalid-commercial-authority",
    embedding: null
  },
  {
    question: "How do I perform portal pushing to Realestate.co.nz?",
    response: "Configure your settings to push listings to Realestate.co.nz. For instructions, see: https://eaglesoftware.help/en/articles/2717158-portal-pushing-to-realestate-co-nz",
    embedding: null
  },
  {
    question: "What should I do if a property marked as let isn’t removed?",
    response: "If a property you marked as let isn’t being removed, it might indicate a synchronization issue. Check out: https://eaglesoftware.help/en/articles/2717155-a-property-i-marked-as-let-has-not-been-removed for troubleshooting steps.",
    embedding: null
  },
  {
    question: "What Price Types are available on TradeMe?",
    response: "Eagle Software offers a variety of Price Types for TradeMe listings. See the options at: https://eaglesoftware.help/en/articles/2717154-price-types-on-trademe",
    embedding: null
  },
  {
    question: "How do I perform portal pushing to REIWA?",
    response: "Push your listings to REIWA using the portal pushing feature. For details, visit: https://eaglesoftware.help/en/articles/2717120-portal-pushing-to-reiwa",
    embedding: null
  },
  {
    question: "What embedded content formats are supported for Homes.co.nz?",
    response: "Eagle Software supports specific embedded content formats for Homes.co.nz. For a complete list, see: https://eaglesoftware.help/en/articles/4841293-homes-co-nz-embedded-content-supported-formats",
    embedding: null
  },
  {
    question: "How do I upload a commercial listing to portals?",
    response: "Upload a commercial listing using Eagle Software’s streamlined process. For detailed steps, check: https://eaglesoftware.help/en/articles/8763490-uploading-a-commercial-listing-to-portals",
    embedding: null
  },
  {
    question: "How do I upload a sold listing to portals for the first time?",
    response: "Follow the guide for first-time sold listing uploads at: https://eaglesoftware.help/en/articles/9398109-uploading-a-sold-listing-to-portals-for-the-first-time",
    embedding: null
  },
  {
    question: "What is the portal error about display price?",
    response: "This error indicates that your display price must be within 10% of the search price. More info is available at: https://eaglesoftware.help/en/articles/3434891-portal-error-displayprice-please-update-your-display-price-to-be-within-10-of-the-search-price",
    embedding: null
  },
  {
    question: "What is the portal error related to updating the listing agent on sold listings?",
    response: "Once a listing is marked as sold, the listing agent cannot be updated. For more details, visit: https://eaglesoftware.help/en/articles/3219627-portal-error-sold-listing-agent-it-is-not-possible-to-update-the-listing-agent-once-a-listing-is-marked-as-sold",
    embedding: null
  },
  {
    question: "What does the 'PayPerListing' portal error mean?",
    response: "The 'PayPerListing' error indicates an issue with the payment settings for your listing. See details at: https://eaglesoftware.help/en/articles/3186779-portal-error-payperlisting",
    embedding: null
  },
  {
    question: "What is the Domain Auction Date Error?",
    response: "This error is related to discrepancies with the domain auction date. For more information, visit: https://eaglesoftware.help/en/articles/2717161-domain-auction-date-error",
    embedding: null
  },
  {
    question: "What is the portal error regarding REAXML modTime?",
    response: "An error related to REAXML modTime settings may occur. For details, see: https://eaglesoftware.help/en/articles/3173368-portal-error-modtime-reaxml-modtime",
    embedding: null
  },
  {
    question: "What is a NABERS rating?",
    response: "A NABERS rating measures the energy efficiency of a property. For more details, visit: https://eaglesoftware.help/en/articles/3146662-what-is-a-nabers-rating",
    embedding: null
  },
  {
    question: "What is the portal error regarding postcode reconz sdn for RealEstate.co.nz?",
    response: "This error indicates an issue with the suburb/postcode settings. More info is available at: https://eaglesoftware.help/en/articles/2717148-portal-error-postcode-reconz-sdn-invalid-realestate-co-nz-suburb-postcode",
    embedding: null
  },
  {
    question: "What is the portal error when a listing has been upgraded?",
    response: "When a listing is upgraded, the suburb field cannot be updated. For further details, check: https://eaglesoftware.help/en/articles/2717153-portal-error-this-listing-has-been-upgraded-it-is-not-possible-to-update-the-suburb-field-on-an-upgraded-listing",
    embedding: null
  },
  {
    question: "How do I check for portal errors?",
    response: "Use Eagle Software’s portal error checking feature to troubleshoot issues. For instructions, visit: https://eaglesoftware.help/en/articles/2717151-check-for-portal-errors",
    embedding: null
  },
  {
    question: "What is the Buyer Table?",
    response: "The Buyer Table displays key buyer information and analytics. For more details, see: https://eaglesoftware.help/en/articles/6045963-buyer-table",
    embedding: null
  },
  {
    question: "How will new homes listings behave on Domain and REA?",
    response: "New homes listings follow specific behavior rules on Domain and REA. For a detailed explanation, visit: https://eaglesoftware.help/en/articles/4630532-how-your-new-homes-listings-will-behave-on-domain-and-rea",
    embedding: null
  },
  {
    question: "How do I add a contract to a listing?",
    response: "Easily add a contract to a listing using Eagle Software’s intuitive interface. More details are available at: https://eaglesoftware.help/en/articles/4089363-add-a-contract-to-a-listing",
    embedding: null
  },
  {
    question: "Why isn’t the image loading for a shared property on Facebook?",
    response: "If the image for a shared property on Facebook isn’t loading, it might be due to caching or format issues. Learn more at: https://eaglesoftware.help/en/articles/4083453-shared-property-on-facebook-not-loading-image",
    embedding: null
  },
  {
    question: "How are projects explained in Eagle Software?",
    response: "Find detailed explanations about managing projects in Eagle Software at: https://eaglesoftware.help/en/articles/4447264-projects-explained",
    embedding: null
  },
  {
    question: "How do I view only my own listings?",
    response: "Filter your listings to view only those you own. For instructions, see: https://eaglesoftware.help/en/articles/3210879-how-do-i-view-only-my-own-listings",
    embedding: null
  },
  {
    question: "How do I create default advertising items and packages?",
    response: "Set up default advertising items and packages to streamline your marketing efforts. Learn how at: https://eaglesoftware.help/en/articles/4034165-creating-default-advertising-items-and-packages",
    embedding: null
  },
  {
    question: "How do I create a new home listing?",
    response: "Create a new home listing using Eagle Software’s listing tools. For detailed instructions, visit: https://eaglesoftware.help/en/articles/3186736-how-to-create-a-new-home-listing",
    embedding: null
  },
  {
    question: "How do I create an off the plan listing?",
    response: "Follow the guide to create an off the plan listing at: https://eaglesoftware.help/en/articles/3186699-how-to-create-an-off-the-plan-listing",
    embedding: null
  },
  {
    question: "How do I manage property tags?",
    response: "Property tags help you categorize listings. For a complete guide, see: https://eaglesoftware.help/en/articles/4024076-manage-property-tags",
    embedding: null
  },
  {
    question: "Why are property photos showing sideways or upside down?",
    response: "This issue may be caused by incorrect orientation metadata. Troubleshoot the problem at: https://eaglesoftware.help/en/articles/2717140-why-are-property-photos-showing-sideways-or-upside-down",
    embedding: null
  },
  {
    question: "What is the difference between an 'Off Market' and 'Withdrawn' listing?",
    response: "Learn the differences between these listing statuses at: https://eaglesoftware.help/en/articles/3167053-what-is-the-difference-between-an-off-market-and-withdrawn-listing",
    embedding: null
  },
  {
    question: "How do I add a video to a listing?",
    response: "Enhance your listing by adding a video. For instructions, visit: https://eaglesoftware.help/en/articles/4023807-add-a-video-to-a-listing",
    embedding: null
  },
  {
    question: "How do I share listing documents?",
    response: "Eagle Software provides a feature for listing document sharing. More details can be found at: https://eaglesoftware.help/en/articles/5791559-listing-document-sharing",
    embedding: null
  },
  {
    question: "How do property tags work?",
    response: "Learn how property tags help organize your listings at: https://eaglesoftware.help/en/articles/2717119-how-do-property-tags-work",
    embedding: null
  },
  {
    question: "How do I add my land listing?",
    response: "Add your land listing using Eagle Software’s tools. See the guide at: https://eaglesoftware.help/en/articles/3170140-how-do-i-add-my-land-listing",
    embedding: null
  },
  {
    question: "How do I add a virtual tour to a listing?",
    response: "Enhance your listing with a virtual tour. For instructions, visit: https://eaglesoftware.help/en/articles/3628752-how-to-add-a-virtual-tour-to-a-listing",
    embedding: null
  },
  {
    question: "What is the file format for uploading floor plans?",
    response: "Ensure your floor plans are in the correct file format. For details, see: https://eaglesoftware.help/en/articles/2717190-file-format-for-uploading-floor-plans",
    embedding: null
  },
  {
    question: "What is the difference between price and display price?",
    response: "Learn how the actual price differs from the display price on your listings at: https://eaglesoftware.help/en/articles/2717188-what-is-the-difference-between-price-and-display-price",
    embedding: null
  },
  {
    question: "How do I access vendor reporting?",
    response: "Access vendor reporting features to analyze performance. For more information, visit: https://eaglesoftware.help/en/articles/2717185-vendor-reporting",
    embedding: null
  },
  {
    question: "How do I troubleshoot trouble uploading images?",
    response: "If you have trouble uploading images, check file type and size. More details are available at: https://eaglesoftware.help/en/articles/2717183-trouble-uploading-images",
    embedding: null
  },
  {
    question: "How do I clone a listing?",
    response: "Clone a listing to quickly duplicate it. For step-by-step instructions, see: https://eaglesoftware.help/en/articles/2717181-clone-listing",
    embedding: null
  },
  {
    question: "How do I adjust the sold price on my website?",
    response: "Update the sold price on your website via Eagle Software. For detailed guidance, visit: https://eaglesoftware.help/en/articles/2717165-how-do-i-adjust-the-sold-price-on-my-website",
    embedding: null
  },
  {
    question: "How do I add vendor paid advertising?",
    response: "Add vendor paid advertising options in Eagle Software by following the instructions at: https://eaglesoftware.help/en/articles/2717122-how-to-add-vendor-paid-advertising",
    embedding: null
  },
  {
    question: "How do I add or edit my property address in the listing details tab?",
    response: "Easily add or edit your property address in the listing details tab. For more information, see: https://eaglesoftware.help/en/articles/2717121-how-to-add-edit-your-property-address-in-listing-details-tab",
    embedding: null
  },
  {
    question: "How do I write ad copy using OpenAI?",
    response: "Use Eagle Software’s integration with OpenAI to generate effective ad copy. More details at: https://eaglesoftware.help/en/articles/9103686-write-your-ad-copy-using-openai",
    embedding: null
  },
  {
    question: "How do I use the AI Feature Finder?",
    response: "Utilize the AI Feature Finder to discover features in Eagle Software. For instructions, visit: https://eaglesoftware.help/en/articles/9788510-using-the-ai-feature-finder",
    embedding: null
  }, {
    question: "How do I build advanced report queries?",
    response: "Learn how to build advanced report queries using Eagle Software. For a comprehensive guide, visit: https://eaglesoftware.help/en/articles/5414233-guide-to-building-advanced-report-queries",
    embedding: null
  },
  {
    question: "How do I use Advanced Reports in Eagle Software?",
    response: "Discover how to effectively use Advanced Reports to analyze your data. Detailed instructions can be found at: https://eaglesoftware.help/en/articles/5413822-how-to-use-advanced-reports",
    embedding: null
  },
  {
    question: "How do I manage inspection times with the Inspection Times Calendar?",
    response: "The Inspection Times Calendar helps you schedule and manage property inspections. Learn more at: https://eaglesoftware.help/en/articles/2717152-inspection-times-calendar",
    embedding: null
  },
  {
    question: "What contracts functionality is available in Eagle Software?",
    response: "Eagle Software offers comprehensive contracts management features. For further details, see: https://eaglesoftware.help/en/articles/2717132-contracts",
    embedding: null
  },
  {
    question: "How do I configure email and calendar synchronization with Eagle?",
    response: "Set up seamless synchronization between your email and calendar using Eagle Software. For complete instructions, visit: https://eaglesoftware.help/en/articles/2717088-how-to-configure-email-calendar-synchronization-with-eagle",
    embedding: null
  }, {
    question: "What is the Buyer Table?",
    response: "The Buyer Table helps you manage buyer information in Eagle Software. For more details, visit: https://eaglesoftware.help/en/articles/6045963-buyer-table",
    embedding: null
  },
  {
    question: "How will my New Homes listings behave on Domain and REA?",
    response: "Learn how your New Homes listings are presented on Domain and REA. See: https://eaglesoftware.help/en/articles/4630532-how-your-new-homes-listings-will-behave-on-domain-and-rea",
    embedding: null
  },
  {
    question: "How do I add a Contract to a Listing?",
    response: "You can add a contract to a listing via Eagle Software. More information is available at: https://eaglesoftware.help/en/articles/4089363-add-a-contract-to-a-listing",
    embedding: null
  },
  {
    question: "Why is a Shared Property on Facebook not loading an image?",
    response: "If your shared property on Facebook isn’t displaying an image, check the supported formats and settings. Details at: https://eaglesoftware.help/en/articles/4083453-shared-property-on-facebook-not-loading-image",
    embedding: null
  },
  {
    question: "What does 'Projects explained' mean in Eagle Software?",
    response: "The 'Projects explained' article covers how projects are managed and used within Eagle Software. Read more: https://eaglesoftware.help/en/articles/4447264-projects-explained",
    embedding: null
  },
  {
    question: "How do I view only my own listings?",
    response: "Learn how to filter and view only your own listings. For full instructions, visit: https://eaglesoftware.help/en/articles/2710879-how-do-i-view-only-my-own-listings",
    embedding: null
  },
  {
    question: "How can I create default advertising items and packages?",
    response: "Set up default advertising items and packages in Eagle Software by following the guide at: https://eaglesoftware.help/en/articles/4034165-creating-default-advertising-items-and-packages",
    embedding: null
  },
  {
    question: "How do I create a new home listing?",
    response: "Create a new home listing in Eagle Software using the provided step-by-step guide: https://eaglesoftware.help/en/articles/3186736-how-to-create-a-new-home-listing",
    embedding: null
  },
  {
    question: "How do I create an off the plan listing?",
    response: "Follow the instructions to create an off the plan listing: https://eaglesoftware.help/en/articles/3186699-how-to-create-an-off-the-plan-listing",
    embedding: null
  },
  {
    question: "How can I manage property tags?",
    response: "Manage property tags in your listings using Eagle Software. More info: https://eaglesoftware.help/en/articles/4024076-manage-property-tags",
    embedding: null
  },
  {
    question: "Why are property photos showing sideways or upside down?",
    response: "This article explains why property photos may display incorrectly and how to fix it: https://eaglesoftware.help/en/articles/2717140-why-are-property-photos-showing-sideways-or-upside-down",
    embedding: null
  },
  {
    question: "What is the difference between an 'Off Market' and 'Withdrawn' listing?",
    response: "Understand the difference between an 'Off Market' and a 'Withdrawn' listing by reading: https://eaglesoftware.help/en/articles/3167053-what-is-the-difference-between-an-off-market-and-withdrawn-listing",
    embedding: null
  },
  {
    question: "How do I add a video to a listing?",
    response: "Learn how to add a video to a listing in Eagle Software here: https://eaglesoftware.help/en/articles/4024076-add-a-video-to-a-listing",
    embedding: null
  },
  {
    question: "What is Listing Document Sharing?",
    response: "Listing Document Sharing allows you to share important listing documents. For further details, visit: https://eaglesoftware.help/en/articles/5791559-listing-document-sharing",
    embedding: null
  },
  {
    question: "How do Property Tags work?",
    response: "This article explains how Property Tags function in Eagle Software: https://eaglesoftware.help/en/articles/2717119-how-do-property-tags-work",
    embedding: null
  },
  {
    question: "How do I add my land listing?",
    response: "Follow the guide to add your land listing: https://eaglesoftware.help/en/articles/3170140-how-do-i-add-my-land-listing",
    embedding: null
  },
  {
    question: "How do I add a Virtual Tour to a listing?",
    response: "Enhance your listing by adding a virtual tour. Learn how at: https://eaglesoftware.help/en/articles/3628752-how-to-add-a-virtual-tour-to-a-listing",
    embedding: null
  },
  {
    question: "What is the difference between Price and Display Price?",
    response: "This article explains the difference between the price and the display price of a property: https://eaglesoftware.help/en/articles/2717188-what-is-the-difference-between-price-and-display-price",
    embedding: null
  },
  {
    question: "What is Vendor Reporting?",
    response: "Vendor Reporting provides detailed reporting on vendor activities. Read more: https://eaglesoftware.help/en/articles/2717185-vendor-reporting",
    embedding: null
  },
  {
    question: "How do I resolve issues with uploading images?",
    response: "If you’re having trouble uploading images, refer to this guide: https://eaglesoftware.help/en/articles/2717183-trouble-uploading-images",
    embedding: null
  },
  {
    question: "How do I clone a listing?",
    response: "Cloning a listing can help speed up the creation process. Find out how: https://eaglesoftware.help/en/articles/2717181-clone-listing",
    embedding: null
  },
  {
    question: "How do I adjust the sold price on my website?",
    response: "This guide explains how to adjust the sold price on your website: https://eaglesoftware.help/en/articles/2717165-how-do-i-adjust-the-sold-price-on-my-website",
    embedding: null
  },
  {
    question: "How do I add vendor paid advertising?",
    response: "Set up vendor paid advertising in Eagle Software by following the instructions at: https://eaglesoftware.help/en/articles/2717122-how-to-add-vendor-paid-advertising",
    embedding: null
  },
  {
    question: "How do I add or edit my property address in the listing details tab?",
    response: "Easily add or edit your property address by following this guide: https://eaglesoftware.help/en/articles/2717121-how-to-add-edit-your-property-address-in-listing-details-tab",
    embedding: null
  },
  {
    question: "How do I write ad copy using OpenAI?",
    response: "Learn how to generate ad copy using OpenAI integration: https://eaglesoftware.help/en/articles/9103686-write-your-ad-copy-using-openai",
    embedding: null
  },
  {
    question: "How do I use the AI Feature Finder?",
    response: "The AI Feature Finder helps you quickly locate features in Eagle Software. Details here: https://eaglesoftware.help/en/articles/9788510-using-the-ai-feature-finder",
    embedding: null
  },
  {
    question: "What is the Portal Error regarding 'DisplayPrice'?",
    response: "This error indicates that your display price must be within 10% of the search price. More details: https://eaglesoftware.help/en/articles/3434891-portal-error-displayprice-please-update-your-display-price-to-be-within-10-of-the-search-price",
    embedding: null
  },
  {
    question: "What does the 'SOLD - Listing Agent' portal error mean?",
    response: "Once a listing is marked as sold, you cannot update the listing agent. See the explanation here: https://eaglesoftware.help/en/articles/3219627-portal-error-sold-listing-agent-it-is-not-possible-to-update-the-listing-agent-once-a-listing-is-marked-as-sold",
    embedding: null
  },
  {
    question: "What is the 'PayPerListing' portal error?",
    response: "The 'PayPerListing' error indicates an issue with the pay-per-listing feature. Learn more at: https://eaglesoftware.help/en/articles/3186779-portal-error-payperlisting",
    embedding: null
  },
  {
    question: "What is the Domain Auction Date Error?",
    response: "This error occurs when the auction date is not correctly set. For details, visit: https://eaglesoftware.help/en/articles/2717161-domain-auction-date-error",
    embedding: null
  },
  {
    question: "What is the 'ModTime: REAXML modTime' portal error?",
    response: "This error relates to the REAXML modification time. Read the full explanation at: https://eaglesoftware.help/en/articles/3173368-portal-error-modtime-reaxml-modtime",
    embedding: null
  },
  {
    question: "What is a NABERS rating?",
    response: "Learn what a NABERS rating is and how it is used in property assessments: https://eaglesoftware.help/en/articles/3146662-what-is-a-nabers-rating",
    embedding: null
  },
  {
    question: "What does 'Portal Error: You already have a listing with the same address' mean?",
    response: "This error indicates that a listing with the same address already exists. More details: https://eaglesoftware.help/en/articles/2717157-this-account-is-not-allowed-to-upload-commercial-ads",
    embedding: null
  },
  {
    question: "How do I upload New Development ads?",
    response: "For accounts restricted from uploading New Development ads, see: https://eaglesoftware.help/en/articles/2717156-this-account-is-not-allowed-to-upload-new-development-ads",
    embedding: null
  },
  {
    question: "Which listing status will be advertised on the portals?",
    response: "Learn which listing status is advertised on the portals by checking: https://eaglesoftware.help/en/articles/3401160-which-listing-status-will-be-advertised-on-the-portals",
    embedding: null
  },
  {
    question: "How do I withdraw a listing?",
    response: "Find out how to withdraw a listing from the market at: https://eaglesoftware.help/en/articles/2717120-portal-pushing-to-reiwa",
    embedding: null
  },
  {
    question: "How do I manage portal pushing?",
    response: "This guide explains how to manage portal pushing settings: https://eaglesoftware.help/en/articles/2717155-a-property-i-marked-as-let-has-not-been-removed",
    embedding: null
  },
  {
    question: "How do I add vendor paid advertising?",
    response: "Instructions for adding vendor paid advertising are available at: https://eaglesoftware.help/en/articles/2717156-this-account-is-not-allowed-to-upload-new-development-ads",
    embedding: null
  },
  {
    question: "How do I determine which listing status will be advertised?",
    response: "Find out which listing status will be advertised on portals here: https://eaglesoftware.help/en/articles/3401160-which-listing-status-will-be-advertised-on-the-portals",
    embedding: null
  },
  {
    question: "How do I manage property tags?",
    response: "Manage property tags through Eagle Software using the guidance at: https://eaglesoftware.help/en/articles/2717188-what-is-the-difference-between-price-and-display-price",
    embedding: null
  },
  {
    question: "How do I generate vendor reporting?",
    response: "Vendor Reporting allows you to see vendor performance details. More information: https://eaglesoftware.help/en/articles/2717185-vendor-reporting",
    embedding: null
  },
  {
    question: "How to setup website tracking on your third party website",
    response: "Learn how to setup website tracking on your third party website. For more details, visit: https://eaglesoftware.help/en/articles/6968976-how-to-setup-website-tracking-on-your-third-party-website",
    embedding: null
  },
  {
    question: "Google Business Page",
    response: "Discover how to create and manage your Google Business Page. For more details, visit: https://eaglesoftware.help/en/articles/3015241-google-business-page",
    embedding: null
  },
  {
    question: "How to setup Ignite on my Eagle Website",
    response: "Learn how to setup Ignite on your Eagle Website. For more details, visit: https://eaglesoftware.help/en/articles/3197155-how-to-setup-ignite-on-my-eagle-website",
    embedding: null
  },
  {
    question: "Get access your Google analytics account",
    response: "Learn how to access your Google Analytics account to track your website performance. For more details, visit: https://eaglesoftware.help/en/articles/3015240-get-access-your-google-analytics-account",
    embedding: null
  },
  {
    question: "How to re-order Agent Profiles on your Eagle Website",
    response: "Find out how to re-order agent profiles on your Eagle Website. For more details, visit: https://eaglesoftware.help/en/articles/2987080-how-to-re-order-agent-profiles-on-your-eagle-website",
    embedding: null
  },
  {
    question: "Search Engine Optimisation (SEO) for Real Estate Websites",
    response: "Learn SEO best practices for real estate websites. For more details, visit: https://eaglesoftware.help/en/articles/2717189-search-engine-optimisation-seo-for-real-estate-websites",
    embedding: null
  },
  {
    question: "How Do I Get Notified of Website Enquiries?",
    response: "Discover how to get notified of website enquiries so you never miss a lead. For more details, visit: https://eaglesoftware.help/en/articles/2717174-how-do-i-get-notified-of-website-enquiries",
    embedding: null
  },
  {
    question: "How To Add News Posts To Your Website",
    response: "Learn how to add news posts to your Eagle Website. For more details, visit: https://eaglesoftware.help/en/articles/2717170-how-to-add-news-posts-to-your-website",
    embedding: null
  },
  {
    question: "Integrate Eagle with a Third-Party Website",
    response: "Find out how to integrate Eagle Software with a third-party website. For more details, visit: https://eaglesoftware.help/en/articles/2717169-integrate-eagle-with-a-third-party-website",
    embedding: null
  },
  {
    question: "SSL Certificate",
    response: "Learn how to manage and install an SSL Certificate for your website. For more details, visit: https://eaglesoftware.help/en/articles/2717168-ssl-certificate",
    embedding: null
  },
  {
    question: "How to add a video to the video player on your website",
    response: "Discover how to add a video to the video player on your website. For more details, visit: https://eaglesoftware.help/en/articles/2717167-how-to-add-a-video-to-the-video-player-on-your-website",
    embedding: null
  },
  {
    question: "How to make the most of your website dashboard",
    response: "Get tips on how to maximize the features of your website dashboard. For more details, visit: https://eaglesoftware.help/en/articles/2717166-how-to-make-the-most-of-your-website-dashboard",
    embedding: null
  },
  {
    question: "Featured Listing on your Eagle Website",
    response: "Learn how to create and manage featured listings on your Eagle Website. For more details, visit: https://eaglesoftware.help/en/articles/2717164-featured-listing-on-your-eagle-website",
    embedding: null
  },
  {
    question: "How to add or edit pages on your website",
    response: "Follow our guide to add or edit pages on your Eagle Website. For more details, visit: https://eaglesoftware.help/en/articles/2717163-how-to-add-or-edit-pages-on-your-website",
    embedding: null
  },
  {
    question: "How To Add Testimonials To Your Website",
    response: "Discover how to add testimonials to boost your website’s credibility. For more details, visit: https://eaglesoftware.help/en/articles/2717142-how-to-add-testimonials-to-your-website",
    embedding: null
  },
  {
    question: "How Do I Update My Logo?",
    response: "Learn how to update your logo on your Eagle Website. For more details, visit: https://eaglesoftware.help/en/articles/2717116-how-do-i-update-my-logo",
    embedding: null
  },
  {
    question: "Cropped Property Listing Images on Your Website/Brochures",
    response: "Troubleshoot issues with cropped property listing images on your website or brochures. For more details, visit: https://eaglesoftware.help/en/articles/2717115-cropped-property-listing-images-on-your-website-brochures",
    embedding: null
  },
  {
    question: "How to add/edit/delete agent profiles",
    response: "Learn how to add, edit, or delete agent profiles on your Eagle Website. For more details, visit: https://eaglesoftware.help/en/articles/2717111-how-to-add-edit-delete-agent-profiles",
    embedding: null
  }, {
    question: "Archiving Trust Account Ledgers",
    response: "Learn how to archive trust account ledgers. Read more at: https://eaglesoftware.help/en/articles/5981053-archiving-trust-account-ledgers",
    embedding: null
  },
  {
    question: "Commissions",
    response: "Find out about commissions. Read more at: https://eaglesoftware.help/en/articles/5947313-commissions",
    embedding: null
  },
  {
    question: "Downloading ABA files for Trust Accounting",
    response: "Learn how to download ABA files for trust accounting. Read more at: https://eaglesoftware.help/en/articles/4082819-downloading-aba-files-for-trust-accounting",
    embedding: null
  },
  {
    question: "How to transfer funds between ledgers",
    response: "Discover how to transfer funds between ledgers. Read more at: https://eaglesoftware.help/en/articles/5305919-how-to-transfer-funds-between-ledgers",
    embedding: null
  },
  {
    question: "Editing ledger information",
    response: "Get guidance on editing ledger information. Read more at: https://eaglesoftware.help/en/articles/4061390-editing-ledger-information",
    embedding: null
  },
  {
    question: "Adding a new ledger with opening balance",
    response: "Learn how to add a new ledger with an opening balance. Read more at: https://eaglesoftware.help/en/articles/4061330-adding-a-new-ledger-with-opening-balance",
    embedding: null
  },
  {
    question: "Manage ledgers",
    response: "Find out how to manage ledgers. Read more at: https://eaglesoftware.help/en/articles/4024847-manage-ledgers",
    embedding: null
  },
  {
    question: "How to add a sales trust transaction",
    response: "Learn how to add a sales trust transaction. Read more at: https://eaglesoftware.help/en/articles/2717182-how-to-add-a-sales-trust-transaction",
    embedding: null
  },
  {
    question: "Exporting a statement from Westpac Bank",
    response: "Learn how to export a statement from Westpac Bank. Read more at: https://eaglesoftware.help/en/articles/2717180-exporting-a-statement-from-westpac-bank",
    embedding: null
  },
  {
    question: "Exporting a statement from Bendigo Bank",
    response: "Learn how to export a statement from Bendigo Bank. Read more at: https://eaglesoftware.help/en/articles/2717179-exporting-a-statement-from-bendigo-bank",
    embedding: null
  },
  {
    question: "Exporting a statement from Commonwealth Bank CommBiz",
    response: "Find out how to export a statement from Commonwealth Bank CommBiz. Read more at: https://eaglesoftware.help/en/articles/2717178-exporting-a-statement-from-commonwealth-bank-commbiz",
    embedding: null
  },
  {
    question: "Exporting a statement from Commonwealth Bank Netbank",
    response: "Learn how to export a statement from Commonwealth Bank Netbank. Read more at: https://eaglesoftware.help/en/articles/2717177-exporting-a-statement-from-commonwealth-bank-netbank",
    embedding: null
  },
  {
    question: "How to reconcile your sales trust account",
    response: "Discover how to reconcile your sales trust account. Read more at: https://eaglesoftware.help/en/articles/2717176-how-to-reconcile-your-sales-trust-account",
    embedding: null
  },
  {
    question: "Exporting your statement from ANZ",
    response: "Learn how to export your statement from ANZ. Read more at: https://eaglesoftware.help/en/articles/2717175-exporting-your-statement-from-anz",
    embedding: null
  },
  {
    question: "Importing your bank statement into Eagle",
    response: "Find out how to import your bank statement into Eagle. Read more at: https://eaglesoftware.help/en/articles/2717173-importing-your-bank-statement-into-eagle",
    embedding: null
  },
  {
    question: "Trust Accounting Overview",
    response: "Get an overview of trust accounting. Read more at: https://eaglesoftware.help/en/articles/2717172-trust-accounting-overview",
    embedding: null
  },
  {
    question: "How to Transfer from your previous Trust Accounting System to Eagle",
    response: "Learn how to transfer from your previous trust accounting system to Eagle. Read more at: https://eaglesoftware.help/en/articles/2717171-how-to-transfer-from-your-previous-trust-accounting-system-to-eagle",
    embedding: null
  },
  {
    question: "How to generate a sales advice letter",
    response: "Find out how to generate a sales advice letter. Read more at: https://eaglesoftware.help/en/articles/2717108-how-to-generate-a-sales-advice-letter",
    embedding: null
  },
  {
    question: "Balancing the Variation between Bank and Cashbook Balance",
    response: "Learn how to balance the variation between bank and cashbook balance. Read more at: https://eaglesoftware.help/en/articles/9418284-balancing-the-variation-between-bank-and-cashbook-balance",
    embedding: null
  },
  {
    question: "Adding trust transactions to reflect advertising funding",
    response: "Discover how to add trust transactions to reflect advertising funding. Read more at: https://eaglesoftware.help/en/articles/9869379-adding-trust-transactions-to-reflect-advertising-funding",
    embedding: null
  },
  {
    question: "Agent Ledgers",
    response: "Find out how to manage agent ledgers. Read more at: https://eaglesoftware.help/en/articles/10036451-agent-ledgers",
    embedding: null
  },
  {
    question: "What is a Boost?",
    response: "A Boost moves a listing to the top of its category in search results. It requires a Feature product and is available for Residential for Rent, Commercial for Sale, and Lease.",
    embedding: null
  },
  {
    question: "What is the difference between Super Feature and Super Feature Renewal?",
    response: "A Super Feature includes a Feature and lasts 7 days. Renewal extends it for another 7 days.",
    embedding: null
  },
  {
    question: "Can I reapply Audience Extension?",
    response: "Yes, after expiration. Each Audience Extension lasts 2 weeks and must be reapplied manually.",
    embedding: null
  },
  {
    question: "What is the difference between Partnership Agreement and Partnership Agreement Plus?",
    response: "The Partnership Agreement auto-applies a marketing package, while the Partnership Agreement Plus auto-applies both a marketing package and an Audience Extension.",
    embedding: null
  },
  {
    question: "Why are there zones?",
    response: "Zones ensure fair pricing by taking into account factors such as listing volume, market value, user engagement, and demand.",
    embedding: null
  },
  {
    question: "How are zones determined?",
    response: "Zones are determined based on metrics like listing numbers, average sold price, listing views, inquiries, and overall user activity.",
    embedding: null
  },
  {
    question: "How do I know my zone?",
    response: "Your zone was sent via email when your account was created. You can also check the zone map provided.",
    embedding: null
  },
  {
    question: "How do I check my agreement type?",
    response: "Refer to your contract or contact Customer Success at propertyagents@trademe.co.nz for details on your agreement type.",
    embedding: null
  },
  

];
 const UsefulClauseData = [{
    question: "What is the clause for 'Sale of the Purchaser’s Property'?",
    response: "A1: This agreement is conditional upon the purchaser obtaining an unconditional agreement for the sale of the purchaser’s property situated at [ADDRESS], for [$......] or such lesser amount as the purchaser accepts on terms and conditions acceptable to the purchaser by [DATE]. This condition is inserted for the sole benefit of the purchaser.\n\nNote: Care must be taken to ensure that any agreement entered into by the purchaser takes into account the standard time limits in this agreement. The normal cut-off time for satisfying conditions is 5.00pm (see clauses 1.1(32) and 1.2(2) of the General Terms of Sale. If in doubt specific legal advice should be obtained).",
    embedding: null
  },
  {
    question: "What is the clause for 'Purchaser’s Existing Property Sale Being Declared Unconditional'?",
    response: "A2: This agreement is conditional upon the existing agreement dated [DATE] for the sale of the purchaser’s property situated at [ADDRESS] to [NAME] becoming unconditional by [DATE]. This condition is inserted for the sole benefit of the purchaser.\n\nNote: Care must be taken when using this clause to ensure that it is correctly linked to the time limits in the purchaser’s existing conditional contract and that there is sufficient time after the time limit set in that agreement to communicate acceptance to the vendor under this contract. The normal cut-off time for satisfying conditions is 5.00pm (see clauses 1.1(32) and 1.2(2) of the General Terms of Sale. If in doubt specific legal advice should be obtained).",
    embedding: null
  },
  {
    question: "What is the clause for 'Settlement of Purchaser’s Sale'?",
    response: "A3: This agreement is conditional upon the agreement for the sale of the purchaser’s property situated at [ADDRESS], settling in terms of that agreement on or before [DATE] or / within [......] working days of the date of this agreement (DELETE ONE). This condition is inserted for the sole benefit of the purchaser.",
    embedding: null
  },
  {
    question: "What is the clause for 'Expiry of Prior Option'?",
    response: "A4: This agreement is conditional upon the existing option over the property previously granted by the vendor to [NAME OF THE OPTION HOLDER] not being exercised by [DATE]. This condition is inserted for the sole benefit of the vendor.\n\nNote: Care must be taken to ensure that there is a proper linkage between the time limits in the first option and in this agreement and in the event of doubt legal advice should be obtained. (See clauses 1.1(32) and 1.2(2) of the General Terms of Sale.)",
    embedding: null
  },
  {
    question: "What is the clause for 'Obtaining Finance'?",
    response: "A5: This agreement is conditional upon the purchaser arranging finance by [DATE] or / within [......] working days of the date of this agreement (DELETE ONE), of an amount of [$......] or / [......%] of the purchase price (DELETE ONE) by way of a first mortgage to be secured against the property from [NAME OF LENDER] or a similar lending institution on terms satisfactory to the purchaser. This condition is inserted for the sole benefit of the purchaser.\n\nNote: If the specific Finance condition particulars in the Conditions section on the front page of the agreement are completed, a clause of this nature would not be required. The Finance condition contained in the Conditions section, or in the clause above, (whichever is used), must be completed with caution. They both have the effect of binding the purchaser to the financial arrangements as stated, something that should be clearly explained to the purchaser.",
    embedding: null
  },
  {
    question: "What is the clause for 'Lawyer’s Approval'?",
    response: "A6: This agreement is conditional upon the approval in all respects of the lawyer for the vendor or / purchaser (DELETE ONE) who may take into account the commercial and conveyancing aspects of this agreement and any other matters which the lawyer considers are relevant. The lawyer is entitled in his or her absolute discretion to give or withhold approval. This condition has been inserted for the benefit of the vendor or / purchaser (DELETE ONE) and is to be satisfied by [DATE] or / within [......] working days of the date of this agreement (DELETE ONE).\n\nNote: If in doubt specific legal advice should be sought by the parties. If there is to be a requirement for full lawyer approval then a due diligence clause may be more appropriate. In a number of cases, the Courts have held that a “Lawyer’s Approval” clause permits withdrawal from an agreement only by reason of legal issues and not for other reasons.",
    embedding: null
  },
  {
    question: "What is the clause for 'Lawyer’s Approval as to Title'?",
    response: "A7: This agreement is conditional upon the purchaser’s lawyer approving in all respects the title and all encumbrances and other interests or instruments registered against the title to the property by [DATE] or / within [......] working days of the date of this agreement (DELETE ONE). This condition is inserted for the sole benefit of the purchaser and is in substitution for the right of requisition pursuant to clause 6.0 of the General Terms of Sale.\n\nNote: This “Lawyer’s Approval” clause is limited to matters of title. The parties should seek specific legal advice before including this condition.",
    embedding: null
  },
  {
    question: "What is the clause for 'Obtaining Building Report - Vendor Given Right to Remedy'?",
    response: "A8: This agreement is conditional upon the purchaser obtaining and approving a report on the condition of any building(s) on the property including but not limited to weather tightness and structural integrity. The purchaser must obtain the report from a suitably qualified building inspector at the purchaser’s cost. The vendor must upon request:\n\n(a) allow the building inspector engaged by the purchaser full access to the property for the purposes of the inspection; and\n\n(b) upon request by the purchaser provide any information held on the property relevant to the inspection.\n\nIf the purchaser does not approve the report the purchaser must provide a copy of the report to the vendor and give notice to the vendor (“purchaser’s notice”) on or before [DATE] or / within [......] working days of the date of this agreement (DELETE ONE) stating the particular matters in respect of which approval is withheld and, if those matters are reasonably capable of remedy, what the purchaser requires the vendor to do to remedy those matters. If the purchaser does not give the purchaser’s notice within the time specified above the purchaser will be deemed to have approved the report.\n\nThe vendor must give notice to the purchaser (“vendor’s notice”) within 5 working days of the receipt of the purchaser’s notice advising whether or not the vendor is willing and able to comply with the purchaser’s notice by the settlement date. If the vendor does not give a vendor’s notice accordingly, or if the vendor’s notice states that the vendor is unable or unwilling to comply with the purchaser’s notice and if the purchaser does not, within 5 working days of receipt of the vendor’s notice, give notice to the vendor that the purchaser waives the requirements contained in the purchaser’s notice, this condition will not have been fulfilled and the provisions of clause 10.8(5) of the General Terms of Sale will apply.\n\nIf the vendor gives a vendor’s notice advising that the vendor is able and willing to comply with the purchaser’s notice, this condition is deemed to have been fulfilled and it will be a requirement of settlement that all the requirements contained in the purchaser’s notice are complied with. The vendor must obtain any necessary approvals or consents of the local authority in respect of the work and comply with any terms or conditions of such approvals or consents.\n\nThe building inspector may open up or otherwise expose for inspection, recording, measuring or testing (“Inspection”) any parts of the building(s) on the property. The purchaser must ensure that any damage to the building(s) occasioned by the Inspection is made good in a proper and workmanlike manner.\n\nNote:\n1. The specific working days and the time limits for rectification should provide an appropriate time for a settlement date which works in with the dates referred to and the agent preparing the agreement with these dates needs to take account of those dates in the same manner as with a LIM clause. This clause can be modified for other types of specialist reports such as valuation, geotechnical and engineering reports.\n2. Clause A8.5 should be omitted if an invasive inspection is not required.",
    embedding: null
  },
  {
    question: "What is the clause for 'Building Inspection'?",
    response: "A9: This agreement is conditional upon the purchaser obtaining a building inspection report and being satisfied with the condition of any building(s) on the property by 5pm on [DATE]. In the event that the purchaser is dissatisfied with any aspect of the report the purchaser may by notice in writing terminate this agreement and in such case any deposit paid must immediately be refunded in full. This clause is inserted for the sole benefit of the purchaser. The vendor undertakes and agrees to:\n\n(a) allow the building inspector employed by the purchaser full access to the property for the purposes of the inspection; and\n\n(b) upon request to the purchaser provide any information held on the property relevant to the inspection.\n\nThe building inspector may open up or otherwise expose for inspection, recording, measuring or testing (“Inspection”) any part of the building(s) on the property. The purchaser must ensure that any damage to the building(s) occasioned by the Inspection is made good in a proper and workmanlike manner.\n\nNote:\n1. This clause provides for access for specialists.\n2. Clause A9.2 should be omitted if an invasive inspection is not required.",
    embedding: null
  },
  {
    question: "What is the clause for 'Obtaining Approvals and/or Resource Consent'?",
    response: "A10: This agreement is conditional upon the vendor or / purchaser (DELETE ONE) obtaining at that party’s own cost from the relevant local authority such approvals or consents as are required to carry out the works or development in respect of the property which that party has agreed to carry out. Such consents or permits are to be obtained upon terms and conditions acceptable to the party making the application for the consent. The party responsible must promptly make application for such consents or permits. Such consents or permits are to be obtained on or before [DATE] or / within [......] working days of the date of this agreement (DELETE ONE). This condition is inserted for the sole benefit of the vendor or / purchaser (DELETE ONE).\n\nNote: It is advisable for both parties to obtain specific legal advice before agreeing to this condition and specify the agreed work that is to be carried out.",
    embedding: null
  },
  {
    question: "What is the clause for 'Director / Trustee Ratification'?",
    response: "A11: The obligations of the purchaser under this agreement are suspended until the agreement has been ratified by the Directors / Trustees of the purchaser. In deciding whether to ratify the agreement, the Directors / Trustees may take into account the commercial and conveyancing aspects of the agreement and such other matters as the Directors / Trustees consider are relevant. If such ratification is not given in writing by the purchaser to the vendor on or before 5.00pm on the [ ...... ] working day after the date of this agreement, this agreement will be void and all moneys paid under it must be refunded and neither party will have any claim against the other. This condition is inserted for the sole benefit of the purchaser.",
    embedding: null
  },
  {
    question: "What is the clause for 'Third Party Consent'?",
    response: "A12: This agreement is conditional upon the vendor obtaining written consent to this sale on terms satisfactory to the vendor from [......] on or before [DATE] or / within [......] working days of the date of this agreement (DELETE ONE). This condition is inserted for the sole benefit of the vendor.",
    embedding: null
  },
  {
    question: "What is the clause for 'Vendor Acquiring Another Property'?",
    response: "A13: This agreement is conditional upon the vendor entering into an agreement to purchase another property of the vendor’s choice and upon that agreement becoming unconditional on or before [DATE] or / within [......] working days of the date of this agreement (DELETE ONE). This condition is inserted for the sole benefit of the vendor.\n\nNote: It is advisable for both parties to obtain legal advice before agreeing to this condition - especially the purchaser as this will bind the purchaser until such time as the vendor has obtained alternative property suitable to themselves.",
    embedding: null
  },
  {
    question: "What is the clause for 'Internal Inspection of Property'?",
    response: "A14: This agreement is conditional upon the purchaser inspecting and approving the state of repair and condition of the interior of the property on or before [DATE] or / within [......] working days of the date of this agreement (DELETE ONE). This condition is inserted on the basis that the purchaser has entered into this agreement before being able to obtain access to the interior of the property for inspection. The purchaser’s rights pursuant to clause 3.2 of the General Terms of Sale continue notwithstanding that this condition is satisfied. This condition is inserted for the sole benefit of the purchaser and either party may exercise their rights under clause 10.8(5) of the General Terms of Sale if this condition is not fulfilled.\n\nNote: This clause should be used with caution as it allows the purchaser a wide discretion to bring the contract to an end. However, it may be appropriate where the purchaser has made an offer but has not yet inspected the inside of the property.",
    embedding: null
  },
  {
    question: "What is the clause for 'Due Diligence (Long)'?",
    response: "A15: This agreement is conditional upon the purchaser, at the purchaser’s sole discretion, being satisfied with the results of the purchaser’s due diligence investigation as to the suitability of the property for the purchaser’s intended use. Such investigation may include, but is not limited to, the following matters:\n\n1. The soundness, suitability and value of the property and any buildings situated on it; and\n2. The suitability of the terms of the local authority’s District and Regional Plans, relevant to the intended use of the property by the purchaser; and\n3. The location of any buildings in relation to the boundaries of the land and any other survey matters; and\n4. Any engineering aspects of the property and buildings on the land taking into account both the current state of the property and buildings and any potential development of the property and buildings; and\n5. Such other matters as the purchaser in the purchaser’s sole discretion determines as relevant to the purchaser’s intended use and benefit of the property.\n\nThe vendor must cooperate with the purchaser in respect of the due diligence enquiry including by:\n(a) providing any relevant information, reports and documentation held by or available to the vendor that will enable the purchaser to better undertake the enquiry; and\n(b) allowing the purchaser together with the purchaser’s consultants full access to the property for the purposes of the enquiry.\n\nThe date for satisfaction of this condition is on or before [DATE] or / within [......] working days of the date of this agreement (DELETE ONE). If this condition is not satisfied by that date then, this agreement is at an end and all moneys paid under it must be refunded and neither party will have any claim against the other. This condition is inserted for the sole benefit of the purchaser.\n\nNote: This clause may need alteration depending on the parties’ circumstances and preferences. Also note that this clause does not necessarily protect the agent against claims by purchasers under the Real Estate Agents Act (Professional Conduct and Client Care) Rules.",
    embedding: null
  },
  {
    question: "What is the clause for 'Due Diligence (Short)'?",
    response: "A16: This agreement is conditional upon the purchaser being satisfied with the results of a due diligence investigation of the property and the purchaser’s intended development of it by 5pm on [DATE]. If the purchaser is dissatisfied with any aspect of this investigation the purchaser may at the purchaser’s absolute discretion by notice in writing terminate this agreement and in such case any deposit paid must immediately be refunded in full. This clause is inserted for the sole benefit of the purchaser and the purchaser is under no obligation whatsoever to supply any reasons for the purchaser’s dissatisfaction with any aspect of the investigation.\n\nThe vendor undertakes and agrees to:\n(a) allow the purchaser together with consultants employed by the purchaser full access to the property for the purposes of the due diligence investigation; and\n(b) provide to the purchaser any information held relating to the property relevant to the due diligence investigation.\n\nNote: This clause does not necessarily exonerate the agent where the agent is aware of any defects or likely defects in the property. The agent is still obliged to comply with the duties under the Real Estate Agents Act (Professional Conduct and Client Care) Rules.",
    embedding: null
  },
  {
    question: "What is the clause for 'Escape Clause'?",
    response: "A17: If before this agreement becomes unconditional the vendor receives an acceptable offer from a third party to purchase the property, then the vendor may serve on the purchaser a notice requiring the purchaser to advise within [......] working days after service of the notice whether all conditions for the benefit of the purchaser have been satisfied or waived and whether the requisition procedure in clause 6.0 of the General Terms of Sale has been completed to the purchaser’s satisfaction. If the purchaser does not notify the vendor within the period set out above that the above matters have all been satisfied and that this agreement is accordingly unconditional, then this agreement will immediately terminate.\n\nNote: This clause is sometimes required by a vendor before accepting a conditional offer. Care must be taken to ensure that there is a proper linkage between the original agreement and the “back-up” agreement. Clause A17 above is inserted in the first agreement and clause A18 below is inserted in any “back-up” agreement. A letter exercising the notice provision in clause A17 should be prepared by the vendor’s lawyer. The vendor should be asked to decide whether or not a conditional back-up offer should be able to trigger the escape clause.",
    embedding: null
  },
  {
    question: "What is the clause for 'Cancellation of Prior Agreement'?",
    response: "A18: This agreement is conditional on the cancellation of the prior agreement referred to below (“Prior Agreement”).\n\nThe vendor must not (without obtaining the prior written consent of the purchaser):\n(a) extend any of the conditional dates in the Prior Agreement; or\n(b) waive any right of the vendor to cancel the Prior Agreement.\n\nThe vendor must cancel the Prior Agreement as soon as the vendor is lawfully entitled to do so.\n\nThe Prior Agreement is an agreement for the sale of the property by the vendor to [......] dated [DATE].",
    embedding: null
  },
  {
    question: "What is the clause for 'On-Sale of Property by Vendor'?",
    response: "A19: The parties acknowledge and the vendor warrants that the vendor has entered into an agreement dated [DATE] to purchase the property (“First Agreement”) and that the First Agreement is conditional until [DATE].\n\nThis agreement is conditional on the First Agreement being declared unconditional in all respects. Any deposit paid by the purchaser under this agreement must be held by the agent as stakeholder until such time as the vendor has advised the purchaser that the vendor under the First Agreement is ready, willing and able to settle under that agreement.\n\nThe parties acknowledge that the vendor has disclosed any provisions contained in the First Agreement that may affect the property and the vendor warrants that all such provisions have been disclosed.\n\nNote: It must be clearly explained to the vendor that he/she/it is not assigning the First Agreement but rather is entering into a separate contract with the purchaser and that the vendor must carry out his/her/its obligations under both contracts, the first as purchaser and the second as vendor.",
    embedding: null
  },
  {
    question: "What is the clause for 'Contemporaneous Settlement'?",
    response: "B1: This agreement and another agreement dated [DATE] made between the same parties and affecting the property at [......] are to be read together and are interdependent. Settlement under each agreement must take place contemporaneously.\n\nNote: If the same agent is acting for both parties under two interdependent agreements and collecting a commission from both transactions care needs to be taken to ensure that both principals are aware and acknowledge in writing that the agent is acting for and receiving commission from both parties. The suggested wording for an acknowledgement, which can be annexed to the agreement for sale and purchase is:\n\n\"To: [NAME OF AGENT] I acknowledge that you have disclosed to me that you are also acting as agent for [OTHER PARTY’S NAME] in the transaction that is interdependent with the transaction in which you are my agent and that you may be receiving a commission from the vendors in both transactions. With full knowledge of these circumstances, I consent to you continuing to act for both parties and receiving commissions from both.\"",
    embedding: null
  },
  {
    question: "What is the clause for 'Deadline for Acceptance of Offer'?",
    response: "B2: This offer by the purchaser is open for acceptance by the vendor by [...... AM/PM] on [DATE]. If by that time, the vendor has not accepted the offer by signing this agreement and giving written notice of such acceptance to the purchaser or the purchaser’s lawyer then this offer will lapse and have no further legal effect and neither party will have any claim against the other.\n\nNote:\n1. It must be clearly explained to the parties that the agreement is not binding on either party until the vendor has notified the purchaser or the purchaser’s lawyer in writing, as noted in this clause.\n2. There is an issue as to whether it is appropriate to insert a clause of this kind in the agreement as it is a term of the offer and not of the agreement. Further, once the agreement comes into force the clause will have no effect. It may be preferable to include the provision in a letter or memo which accompanies the purchaser’s offer. Specific legal advice should be sought.",
    embedding: null
  },
  {
    question: "What is the clause for 'Disclaimer (General)'?",
    response: "B3: Despite any other provision in this agreement, the purchaser acknowledges and agrees that the vendor (and any agent of the vendor) has no liability to the purchaser for any representations made by anyone concerning any issue under the Resource Management Act 1991 and/or Building Act 2004 (DELETE AS APPLICABLE) with regard to the property or any buildings (as defined in the Building Act 2004) erected thereon. The purchaser will not have any claim or right of recovery against the vendor or the vendor’s agent in respect of any such representation, however made.\n\nNote: This exclusion clause does not necessarily protect the vendor nor the agent. Courts can disregard such a disclaimer under the Contractual Remedies Act unless the circumstances are such that the clause should be upheld and it will not necessarily protect the agent if claims are made under the Fair Trading Act or a complaint is lodged under the Real Estate Agents Act.",
    embedding: null
  },
  {
    question: "What is the clause for 'Disclaimer as to Weathertightness and Integrity of Materials of the Property'?",
    response: "B4: Despite any other provision in this agreement, the purchaser acknowledges that no representation has been made by the vendor on which the purchaser is relying concerning the condition of the property including but not limited to the weathertightness or structural integrity of both the property and the materials in the property. The purchaser enters into this agreement solely in reliance on the purchaser’s own judgement. The purchaser will not have any right of recovery against the vendor or the vendor’s agent in respect of any such representation, however made.\n\nNote: This exclusion clause does not necessarily protect the vendor nor the agent. Courts can disregard such a disclaimer under the Contractual Remedies Act unless the circumstances are such that the clause should be upheld and it will not necessarily protect the agent if claims are made under the Fair Trading Act or a complaint is lodged under the Real Estate Agents Act.",
    embedding: null
  },
  {
    question: "What is the clause for 'Disclosure of Non-Compliance'?",
    response: "B5: Despite any other provision in this agreement, the purchaser acknowledges and accepts that the purchaser has been fully informed that certain aspects specified by the vendor in respect of the property or buildings (as defined in the Building Act 2004) may not comply with the Building Act or the Building Code and that there is no building permit, building consent, resource consent, code compliance certificate, certificate of acceptance or final sign off for any building permits (if applicable), in respect of the property or building works carried out thereon. Accordingly, the vendor’s warranties under clause 7 of the General Terms of Sale are hereby negated. The purchaser enters into this agreement and accepts the property on this express understanding and will have no claim against the vendor under the vendor’s warranties pursuant to clause 7 with regards to the Building Act and the Building Code nor will the purchaser have the right to issue a purchaser’s notice pursuant to clause 10.2(2) of the General Terms of Sale in respect of any matters relating to the non-compliance with the Resource Management Act 1991, Building Act or the Building Code.\n\nNote: This clause does not necessarily protect the agent. If this clause is used it is recommended the particular work that is non-compliant is defined or explained in the clause. The agent will still be expected to comply with the Real Estate Agents Act (Professional Conduct and Client Care) Rules.",
    embedding: null
  },
  {
    question: "What is the clause for 'Property Awaiting Code Compliance Certificate'?",
    response: "B6: The vendor must, at the vendor’s cost in all respects, make application for and obtain a code compliance certificate for the property. Where necessary, the vendor must at the vendor’s cost in all respects carry out such work as is required in order to obtain the code compliance certificate. The code compliance certificate must be obtained by the vendor prior to, and as a requirement of, settlement and the vendor must provide a copy of the code compliance certificate to the purchaser immediately upon it being granted to the vendor.\n\nThe purchaser must settle within [......] working days of the vendor providing a copy of the code compliance certificate to the purchaser, or on settlement date, whichever is the later.\n\nIf the vendor is unable to obtain a code compliance certificate within [......] months of the date of this agreement, the purchaser may cancel this agreement in which case the vendor must refund to the purchaser the deposit in full. Upon the refund of the deposit, this agreement will be at an end and neither party will have any further claim against the other.\n\nNote: If the above clause is used then on the front page of the agreement after the settlement date insert “subject to clause [CLAUSE NUMBER] in the Further Terms of Sale”. Also note that alteration to this clause may be necessary in situations where the vendor is unable to obtain a code compliance certificate from the relevant territorial authority and may wish to refer to a certificate of acceptance or safe & sanitary report instead, for example. It is recommended to state the particular work that is to be undertaken in this clause. This clause is designed to cover the position where work has been carried out but a code compliance certificate has not been obtained.",
    embedding: null
  },
  {
    question: "What is the clause for 'Leasehold - Purchaser’s Acknowledgment'?",
    response: "B7: The purchaser is aware that the land is held under a perpetually renewable ground lease from [......] as Lessor. The lease is renewable every [......] years with the present term expiring on [DATE]. The current rental is [$......] per annum. The lease provides for review of the rental every [......] years with the next rent review date being [DATE].\n\nThis agreement is conditional upon any necessary consent of the Lessor to the assignment of the lease from the vendor to the purchaser, which consent must be obtained by the vendor at the vendor’s expense on or before the settlement date.",
    embedding: null
  },
  {
    question: "What is the clause for 'Lowest Cash Price'?",
    response: "B8: The purchase price for the property is the lowest price that the parties would have agreed upon for the property at the date this agreement is entered into under the rules relating to the accrual treatment of income and expenditure in the Income Tax Act 2007 and on that basis no income or expenditure arises in respect of the sale and purchase of the property under those rules and the purchase price does not contain any capitalised interest.\n\nNote: This clause is to be used for a lengthy, delayed settlement.",
    embedding: null
  },
  {
    question: "What is the clause for 'Variation of Purchase Price'?",
    response: "B9: The purchase price is that provided in this agreement or such increased purchase price determined by the Inland Revenue Department as being the market price for the property.\n\nOR\n\nIf at any time the Inland Revenue Department (IRD) considers the purchase price recorded in this agreement is inadequate or excessive, then if both the vendor and the purchaser agree, they may, provided that settlement has not taken place:\n(a) Terminate this agreement; or\n(b) Adjust the purchase price to that approved by the IRD; or\n(c) Adjust the purchase price to that agreed between themselves.\n\nNote: This clause is used when a property is transferred to/from a Trust. It is essential that the parties have legal advice if a Trust is involved in the transaction.",
    embedding: null
  },
  {
    question: "What is the clause for 'Purchaser’s Waiver of Requisition'?",
    response: "B10: The purchaser accepts the vendor’s title and acknowledges that the purchaser has no right to object to or requisition the vendor’s title under clauses 6.2 or 6.3 of the General Terms of Sale. Furthermore sub-clause 2.4(1) of the General Terms of Sale is hereby negated.\n\nNote: It is advisable that the agent first ensures that the purchaser obtains specific legal advice before agreeing to this condition.",
    embedding: null
  },
  {
    question: "What is the clause for 'Probate - Sale by an Estate'?",
    response: "B11: The vendors have signed this agreement as executors of the estate of the registered proprietor. Settlement cannot occur until such time as probate has been granted by the High Court. Pending the grant of probate the purchaser has two options, namely:\n\n(a) To take possession of the property under an Occupation Licence on the terms and conditions set out below; or\n(b) To take possession of the property upon payment of the balance of the purchase price to the vendors’ lawyer’s trust account, to be held in escrow by the vendors’ lawyer, pending the grant of probate and the vendors’ ability to pass clear title to the purchaser. Any interest earned on the balance of the purchase price held in the vendors’ lawyer’s trust account as set out in this clause will accrue to the benefit of the vendors.\n\nPrior to taking possession of the property the purchaser must provide to the vendors an undertaking that the purchaser will settle on the settlement date in full and without deduction.\n\nWhile the purchaser is in possession of the property the purchaser must:\n(a) Occupy the property as a licensee;\n(b) Maintain the property in the same state of repair and condition as at the date of commencement of possession;\n(c) Meet the cost of all utilities in respect of the property;\n(d) Make no alterations or additions to the property;\n(e) Not carry out any act or thing which might invalidate the vendors’ insurance; and\n(f) Comply with all the terms and conditions of the Occupation Licence.\n\nNote: It is preferable that the parties have specific legal advice when inserting this clause in the agreement. With clause B11, the parties may prefer to set the settlement date as [......] working days after the vendor has notified the purchaser that Probate has been granted by the High Court.",
    embedding: null
  },
  {
    question: "What is the clause for 'Guarantee of Purchaser’s Obligations'?",
    response: "B12: In consideration of the vendor entering into this agreement at the request of the guarantor (as the guarantor acknowledges) the guarantor unconditionally and irrevocably guarantees to the vendor the due and punctual performance of all of the obligations of the purchaser under this agreement. The liability of the guarantor under this guarantee constitutes a principal obligation of the guarantor and that liability is not relieved or in any way affected in a manner prejudicial to the vendor by any granting of time, waiver or forbearance to sue by the vendor or by any other act, omission, matter, circumstance or thing whereby the guarantor as a surety only would, but for the provisions of this clause, have been released from liability.\n\nThe guarantor indemnifies the vendor from and against any loss, claim, demand, cost, action or proceeding whatsoever which the vendor may incur or suffer resulting from default by the purchaser in compliance with any of the obligations of the purchaser under this agreement.\n\nNo release, delay or other indulgence given by the vendor to the purchaser or other alteration in the terms of this agreement or any other thing by which the guarantor would have been released if the guarantor had been a surety only will release, prejudice or affect the liability of the guarantor as guarantor or indemnifier.\n\nNote: If this clause is used, there should be a separate execution clause by the guarantor who must sign the agreement. The vendor’s lawyer should review this clause before including it in the agreement. The guarantor may need to obtain independent legal advice prior to signing.",
    embedding: null
  },
  {
    question: "What is the clause for 'Confidentiality'?",
    response: "B13: No party to this agreement may divulge the existence or details of this agreement to any other party without the prior written consent of the other party unless either party, acting reasonably, considers that it is necessary to divulge to their respective legal advisors, the purchaser’s financier or the purchaser’s other advisors such particulars as are necessary for the purchaser to satisfy the conditions contained in this agreement. The obligations in this clause continue in force until such time as the parties agree that the existence of this agreement and the information contained in it is no longer confidential. If the agreement is terminated and settlement does not occur, a party must, if requested by the other party, return to that party any information supplied by that party in respect of this agreement.\n\nClause B13.2 does not prevent the agent from providing statistical data from this agreement to the Real Estate Institute of New Zealand Incorporated.",
    embedding: null
  },
  {
    question: "What is the clause for 'Facsimile and Electronic Execution'?",
    response: "B14: This agreement may be constituted by each party signing a copy and forwarding it to the other party by facsimile. Each party agrees to subsequently deliver their respective signed copy to the other party if required on the basis that all parts of the agreement will be held on behalf of both parties. This agreement may be executed in any number of counterparts and each party may execute separate counterparts. All of the counterparts together will be deemed one and the same instrument.\n\nThis agreement will be deemed to be signed by a party if that party executes and delivers to the other party any of the following formats of the agreement:\n(a) An original; or\n(b) A copy in Portable Document Format (“PDF”) transmitted by email; or\n(c) A facsimile copy.\n\nThe delivery by a party to the other of a PDF or facsimile copy of this agreement duly executed will be deemed delivery of the original thereof and the party so delivering the PDF or facsimile copy must deliver to the other party an original within five (5) working days after delivery of the PDF or facsimile copy. If the original is not so delivered, the party accepting the PDF or facsimile copy pursuant to this clause may in any court of law or other proceeding produce, or exhibit the PDF or facsimile copy as if it were the original thereof and no party to this agreement may object to the copy being produced or exhibited as an original and will be deemed to have waived any law of evidence or other requirement that an original executed document be produced or exhibited as evidence of the existence or content of the agreement.",
    embedding: null
  },
  {
    question: "What is the clause for 'No Assignment of Agreement'?",
    response: "B15: The purchaser must not assign, transfer (whether by nomination or otherwise), dispose of or alienate the benefit of this agreement nor any rights or obligations under it nor nominate any other person as the transferee, except with the prior written approval of the vendor.\n\nNote: ‘and/or nominee’ on the front page of the agreement must be deleted if this clause is used.",
    embedding: null
  },
  {
    question: "What is the clause for 'Access for Due Diligence'?",
    response: "B16: The vendor must allow the purchaser’s consultants and advisors to enter onto the property prior to the date for satisfying the due diligence condition and during normal working hours to undertake survey, engineering and/or geotechnical investigations required for the purchaser’s future development of the property provided however that those entering onto the property must cause as little disruption to the vendor and the vendor’s normal activities on the land as is reasonably possible.",
    embedding: null
  },
  {
    question: "What is the clause for 'Early Release of Deposit'?",
    response: "B17: The parties agree to sign all documents necessary to allow the deposit to be released earlier than the statutory period prescribed in s 123 of the Real Estate Agents Act 2008.",
    embedding: null
  },
  {
    question: "What is the clause for 'Settlement in Person'?",
    response: "B18: Despite any provision to the contrary in the General Terms of Sale, the vendor’s lawyer may by giving notice to the purchaser’s lawyer not less than two working days prior to the settlement date, require settlement to be effected in person. In that event payment must be made in the manner provided in clause 3.10 of the General Terms of Sale.",
    embedding: null
  },
  {
    question: "What is the clause for 'Subdivision'?",
    response: "B19: This agreement is conditional upon the vendor at the vendor’s expense obtaining a subdivisional resource consent in respect of the attached sub-divisional plan (‘Subdivisional Plan’) on terms and conditions which are:\n(a) usual in the circumstances; or\n(b) not unduly prejudicial to either party; or\n(c) acceptable to each party.\n\nThe date for satisfying of this condition is [DATE].\n\nOnce the above condition is satisfied, the vendor must at the vendor’s cost and with due expedition, take all necessary steps to deposit the Subdivisional Plan at LINZ in order to arrange for a separate title to issue in respect of the property.\n\nIf the Subdivisional Plan has not been deposited with LINZ after the date on which the condition in clause [......] is satisfied, the purchaser may cancel this agreement by notice in writing given to the vendor at any time prior to the purchaser receiving notice of the deposit of the Subdivisional Plan.\n\nThe purchaser accepts that the area and/or the measurements of the property may be adjusted on final survey. The purchaser will have no claim of any kind against the vendor as a consequence of any such variations.\n\nThe purchaser must not register a caveat against the title to the vendor’s land prior to the issue of a separate title for the property.",
    embedding: null
  },
  {
    question: "What is the clause for 'Retention of Deposit'?",
    response: "B20: The person to whom the deposit is paid must hold it as a stakeholder until one of the following events occurs:\n(a) settlement is effected; or\n(b) settlement is overdue solely by reason of default by the purchaser; or\n(c) this agreement is validly cancelled by a party.\n\nClause 2.4 of the General Terms of Sale is negated.",
    embedding: null
  },
  {
    question: "What is the clause for 'Assignment of Warranties and Guarantees'?",
    response: "B21: The vendor must, subject to the provisions of clause [21.3], do everything necessary to assign to the purchaser on settlement the benefit of all warranties, guarantees, contracts and commitments from or with third parties in favour of the vendor (‘Warranties’) regarding the condition, fitness or maintenance of the property, including or relating to (in particular but not in limitation) structural soundness, weathertightness, fixtures and fittings, plant and equipment, utilities, heating ventilation and air-conditioning, and other electrical and mechanical installations on the property.\n\nThe vendor must upon request by the purchaser deliver to the purchaser copies of all Warranties which are in the vendor’s possession or control.\n\nWhere the vendor is unable to assign the benefit of a Warranty without consent of the relevant third party, the vendor must use best endeavours to obtain the consent of the third party to the assignment.",
    embedding: null
  },
  {
    question: "What is the clause for 'New Zealand Real Estate Trust Terms of Use for Agencies'?",
    response: "B22: This may be accessed from the New Zealand Real Estate Trust website at www.realestatetrust.co.nz/termsofuse.",
    embedding: null
  },
  {
    question: "What is the clause for 'New Zealand Real Estate Trust Terms of Use for Vendor and Purchaser'?",
    response: "B23: This may be accessed from the New Zealand Real Estate Trust website at www.realestatetrust.co.nz/termsofuse.\n\nNote: New Zealand Real Estate Trust and its related entities are not associated with, nor endorsed by either the Real Estate Institute of New Zealand or the New Zealand Law Society.",
    embedding: null
  }  ,
  {
    question: "What is the clause for 'Disclosure of Weathertightness Issues'?",
    response: "C1: The purchaser acknowledges and accepts the purchaser has been fully informed that the property may not be weather tight or structurally sound. Accordingly, the vendor gives no warranty with respect to the weather tightness or structural integrity of the property and the vendor’s warranties under clause 7 of the General Terms of Sale do not apply. The purchaser enters into and accepts the property on this express understanding. The purchaser acknowledges that the vendor has no liability to the purchaser in relation to weather tightness or structural integrity of the property and agrees to waive any right of recovery against the vendor in respect of the same whether under clause 6.4 and/or clause 7.5 of this agreement or otherwise. The vendor must deliver to the purchaser, immediately upon receipt, any notice or demand received by the vendor (or any other information the vendor receives or becomes aware of) in respect of the weather tightness or structural integrity of the property.\n\nNote: This clause does not necessarily exonerate the agent where the agent is aware of any defects or likely defects with the building and the agent is still obliged to comply with the agent’s statutory duties under the Real Estate Agents Act (Professional Conduct and Client Care) Rules. The use of this clause should be limited to situations where there has been full disclosure of the risks and potential problems or actual problems with regard to the property and it is recommended to specify in this clause what has been disclosed.",
    embedding: null
  },
  {
    question: "What is the clause for 'Vendor to Construct New Dwelling on the Land'?",
    response: "C2: The vendor must, at the vendor’s cost in all respects, complete construction of the dwelling currently under construction on the property together with such other improvements as are identified in the vendor’s plans and specifications (attached) and which are lodged with the local authority for the purpose of obtaining the necessary building consent under the Building Act 2004. The vendor must complete the construction diligently and with due expedition in accordance with best trade practices and the warranties set out under the Building Act 2004 and in accordance with the current building codes and the terms of the building consent.\n\nNote: Care must be taken to make sure plans and specifications are attached to the agreement and that all signing parties initial every page of the attached plans and specifications.",
    embedding: null
  },
  {
    question: "What is the clause for 'Variation to Plans and Specifications'?",
    response: "C3: The vendor reserves the right to amend, revise or alter the plans and specifications attached in such manner as the vendor considers appropriate having regard to the circumstances, and the purchaser will not be entitled to claim any compensation, damages, right of set off or to make any objection or requisition based on any such amendment, revision or alteration whether pursuant to clause 6.4 and 7.5 of the General Terms of Sale or otherwise provided that any such amendment, revision or alteration does not have a material adverse effect on the use, occupation, enjoyment or value of the property.\n\nNote: Care must be taken to make sure plans and specifications are attached to the agreement and that all signing parties initial every page of the attached plans and specifications.",
    embedding: null
  },
  {
    question: "What is the clause for 'Maintenance Provision'?",
    response: "C4: There is a maintenance period of [......] days from the settlement date. The vendor must carry out, during or within a reasonable time from the expiry of the maintenance period, all maintenance work arising from faulty materials or workmanship, at the vendor’s cost and in compliance with the Building Act 2004 and the Building Code, which are notified by the purchaser in writing to the vendor prior to the expiry of the maintenance period. For the avoidance of doubt the vendor will not be required to repair damage caused by other owners, the purchaser or the purchaser’s employees, contractors or visitors or caused by fire, earthquake, tempest, or other occurrence normally covered by a comprehensive insurance policy.",
    embedding: null
  },
  {
    question: "What is the clause for 'Substitution of Materials'?",
    response: "C5: If any materials shown in the plans and specifications are unprocurable or are prohibited by any law, or the consequences of strict adherence are financially impractical, or if it becomes necessary or expedient for the vendor to undertake or incorporate an amendment in respect of anything shown or described in the plans and specifications, the vendor may substitute such materials with materials that are of a value and quality as near as reasonably practicable to the specified materials, provided that the changes or amendments do not result in any material adverse effect on the use, occupation, enjoyment or value of the property by the purchaser.",
    embedding: null
  },
  {
    question: "What is the clause for 'Swimming Pool/Spa Pool Non-Compliance'?",
    response: "C6: The purchaser acknowledges and accepts that the swimming pool or / spa pool (DELETE AS APPLICABLE) situated on the property and the associated means of restricting access to it may not be:\n(a) In a proper working order and condition; and/or\n(b) In compliance with the local authority’s building bylaws or the Building Act 2004 or the Building Code; and/or\n(c) In compliance with the local authority requirements as to swimming pool fencing and/or with the Building (Pools) Amendment Act 2016.\n\nThe vendor gives no warranty as to the working order and condition of the swimming pool or / spa pool (DELETE AS APPLICABLE) nor in respect of its compliance with the requirements of the local authority, the Building Act 2004 and the Building Code or with the local authority’s fencing requirements or the Building (Pools) Amendment Act 2016. Accordingly, the vendor’s warranties under clause 7 of the General Terms of Sale do not apply to the swimming pool or / spa pool (DELETE AS APPLICABLE) and the associated means of restricting access to it.\n\nNote: Real estate agents should remember that when they are conducting open homes, they have obligations as a PCBU under the Health and Safety at Work Act 2015 and should take care, in consultation with the vendor, to implement controls on any safety hazards (including any non-compliant pools) present at the property.",
    embedding: null
  },
  {
    question: "What is the clause for 'Vendor to Complete Work Prior to Settlement'?",
    response: "C7: Prior to settlement the vendor must carry out the following work on the property at the vendor’s cost:\n(a) [......]\n(b) [......]\n(c) [......]\n\nAll work that the vendor is to carry out will be subject to the warranties in clause 7.2(5) of the General Terms of Sale and must be carried out in a proper and competent manner in accordance with the terms of the Building Act 2004 and the Building Code and (if relevant) the terms of the building consent obtained by the vendor from the local authority. This work must be completed prior to, and as a requirement of, settlement.\n\nIf any work that the vendor is to carry out requires a code compliance certificate, the vendor must, at the vendor’s cost in all respects, carry out such work in order to be granted the code compliance certificate and make application for a code compliance certificate for the work. The code compliance certificate must be obtained by the vendor prior to, and as a requirement of, settlement and the vendor must provide a copy of the code compliance certificate to the purchaser immediately upon its receipt by the vendor.",
    embedding: null
  },
  {
    question: "What is the clause for 'Right of Entry for Construction by Purchaser'?",
    response: "C8: Upon the purchaser declaring this agreement unconditional in all respects, the vendor must permit the purchaser, together with the purchaser’s agents, contractors and employees and their equipment and machinery, access to the property during normal business hours. The access will be for the express purpose of development / construction in the area marked on the plan annexed hereto.\n\nUpon the purchaser exercising the right of access pursuant to this clause the purchaser must pay to the vendor the sum of [$......] on account of the purchase price prior to commencement of the development / construction work and the purchaser will be liable for any damage to the property caused by the purchaser or the purchaser’s agents, invitees, contractors or employees.\n\nThe purchaser acknowledges that the proposed development / construction work is undertaken at the purchaser’s sole risk and must ensure that there is an appropriate form of insurance in place for the work and must further ensure that the vendor’s and the vendor’s mortgagees’ interests are noted on the insurance policies.\n\nNote: This clause should be used with caution and it is preferable the parties have specific legal advice. The vendor must be made aware of the risks if the purchaser fails to settle and development / construction work has been carried out. It may be desirable to require the purchaser to obtain an appropriate building consent from the territorial authorities prior to commencing any work and produce such evidence to the vendor prior to granting the access. The vendor could also seek an appropriate completion bond for the work.",
    embedding: null
  },
  {
    question: "What is the clause for 'Curtilage Exemption'?",
    response: "C9: The parties agree that for the purposes of GST the value of the dwelling house on the land and the immediate surrounding curtilage is [$......]. However, in the event that the value of the dwelling house and curtilage or the remaining land are determined by Inland Revenue Department as being inadequate or excessive then the value must be adjusted as required or approved by the Inland Revenue Department but the total price payable for the entire property will not be adjusted.\n\nNote: It is preferable for the parties to have specific legal advice when dealing with GST issues in an agreement. It is important that both parties understand their GST obligations under the agreement before the agreement is signed.",
    embedding: null
  },
  {
    question: "What is the clause for 'Formula for GST Date'?",
    response: "D1: The GST date for the purposes of clause 14 of the General Terms of Sale is [......] working days before the date on which the vendor is to account to the Inland Revenue Department for GST or the settlement date, whichever occurs earlier. The vendor must give the purchaser not less than five (5) working days written notice of the GST date where it falls earlier than the settlement date.\n\nNote: This clause should be used only in the event that the GST date on the front page of the agreement is not written in. It is advisable for both parties to obtain specific legal advice before agreeing to this condition.",
    embedding: null
  },
  {
    question: "What is the clause for 'Alterations to GST Information'?",
    response: "D2: If the GST information supplied in this agreement by the purchaser is altered prior to settlement in accordance with clause 15.5 and the parties agree the price will be adjusted accordingly neither of the parties will hold the agent, its employees or contractors liable for any claims arising from this and the parties will indemnify the agent, its employees and contractors accordingly. The parties acknowledge that they have been advised to obtain independent tax advice before entering into this agreement.\n\nNote: This clause does not necessarily exonerate the agent from his or her obligations under the Real Estate Agents Act (Professional Conduct and Client Care) Rules.",
    embedding: null
  },
  {
    question: "What is the clause for 'Crown Lease'?",
    response: "E1: This agreement is conditional upon the consent of the lessor under Crown Lease number [......] being obtained from the relevant authority by [......] or / within [......] working days after the date of this agreement (DELETE ONE). Each party must take whatever steps are necessary or desirable to ensure the satisfaction of this condition and in particular the purchaser must provide the vendor with all reasonable assistance in this regard including providing full and prompt responses to the lessor’s reasonable request(s) for information concerning the purchaser and procuring such guarantees of the lease as the lessor may reasonably require.",
    embedding: null
  },
  {
    question: "What is the clause for 'Farm Management'?",
    response: "E2: The vendor must farm the property until the possession date in a manner that is in accordance with industry standards after taking into account:\n(a) The vendor’s specific obligations under this agreement (if any); and\n(b) Climatic and similar conditions which the vendor cannot control.\n\nHowever this farm management clause does not require the vendor to carry out any seasonal work involving specific expense.\n\nNote: This clause is not intended to cover such things as fertiliser application, specific weed control, cleaning ditches, cutting hedges, planting crops, re-grassing etc. Other clauses to cover those specific occurrences must be inserted in the agreement in addition.",
    embedding: null
  },
  {
    question: "What is the clause for 'Top Dressing'?",
    response: "E3: Prior to settlement the vendor must, at the vendor’s expense in all respects, top dress the property at the appropriate time in accordance with the normal custom in the district in which the property is situated with not less than [......] tonnes per hectare of [......].\n\nNote: This clause should be amended if top dressing is to be undertaken on only part of the property.",
    embedding: null
  },
  {
    question: "What is the clause for 'Vendor to Leave Hay for Purchaser'?",
    response: "E4: The vendor must leave for the purchaser on the possession date, at no cost to the purchaser, no less than [......] bales of hay stored under cover.\n\nNote: Because different types of baling are now used, it will be necessary to describe the type of bale.",
    embedding: null
  },
  {
    question: "What is the clause for 'Autumn-Saved Pasture'?",
    response: "E5: The vendor must not later than [DATE], close up and refrain from grazing that part of the property marked “A” on the attached plan which comprises approximately [......] hectares. That area will be for the exclusive use of the purchaser following settlement.\n\nNote: Care must be taken to make sure the plan is attached to the agreement and all signing parties initial every page of the attached plan.",
    embedding: null
  },
  {
    question: "What is the clause for 'Sowing Winter Feed / Pasture'?",
    response: "E6: Prior to settlement the vendor must, at the vendor’s expense in all respects, cultivate, sow and fertilise [......] hectares of winter feed or / pasture (DELETE ONE) in accordance with best farming practice in the district in which the property is situated.",
    embedding: null
  },
  {
    question: "What is the clause for 'Re-Grassing'?",
    response: "E7: The vendor must, at the vendor’s expense, cultivate and re-sow in grass (OR ALTERNATIVELY SPECIFY THE SEED TO BE SOWN) the area marked [......] on the attached plan during the month of [DATE]. The type of seed must be approved by the purchaser, but the purchaser must not unreasonably withhold its consent.\n\nSuch re-sowing must be carried out in accordance with best farm practices with the appropriate quality and quantity of seed and fertiliser.",
    embedding: null
  },
  {
    question: "What is the clause for 'Transfer of Resource Consents as to Farming Operation'?",
    response: "E8: The vendor must use the vendor’s best endeavours to transfer and assign to the purchaser the rights that the vendor holds under the vendor’s resource consents relating to the farming operation. Such consents may include, without limitation, the transfer of any water rights and any rights of disposal of effluent and otherwise. If such rights cannot be transferred or assigned to the purchaser then the purchaser must accept that situation and will have no claim against the vendor arising under this clause.\n\nNote: See also clause 1C above (Obtaining Approvals and/or Resource Consent).",
    embedding: null
  },
  {
    question: "What is the clause for 'Chattels Exclusion - Property of Sharemilker / Tenant / Manager'?",
    response: "E9: The purchaser acknowledges and accepts that the specific chattels listed below situated in the dwelling house on the property are owned by the sharemilker / tenant / farm manager and are excluded from the sale evidenced by this agreement.\n\nThe vendor must ensure that those chattels are removed from the property prior to the possession date. The chattels are as follows:\n(a) [CHATTEL]\n(b) [CHATTEL]\n(c) [CHATTEL]",
    embedding: null
  },
  {
    question: "What is the clause for 'Effluent Disposal Warranty'?",
    response: "E10: The vendor warrants that the effluent disposal system on the property will, as at settlement date, meet the requirements of the local authority in all respects.",
    embedding: null
  },
  {
    question: "What is the clause for 'Reservation of Forestry Rights'?",
    response: "E11: The purchaser accepts and agrees that the vendor retains the timber cutting rights over an area of approximately [......] hectares of radiata pine (OR OTHER SPECIES OF TREES IF APPLICABLE) within the area marked red on the attached plan. Such cutting rights will continue for a term of [......] years from the settlement date.\n\nThe cutting rights include the rights of the vendor, the vendor’s agents, employees and contractors to:\n(a) Gain access at reasonable times to the area together with such vehicles, plant and equipment as is necessary for the purposes of inspecting, protecting, tending, cutting and harvesting the trees; and\n(b) Make, construct and utilise such roadways, bridges, dams and landings as are necessary for the purposes of inspecting, protecting, tending, cutting and harvesting the trees.\n\nOnce the harvesting of the trees is complete, or on the sooner termination of the cutting rights, the vendor must leave the area [SPECIFY THE STATE IN WHICH THE LAND IS TO BE LEFT – E.G., CLEAR AND READY FOR REPLANTING / READY FOR GRASS SEED ETC].\n\nAt any time during the term of the cutting rights the vendor may call on the purchaser to execute a transfer granting cutting rights. Both parties agree to enter into the appropriate Authority and Instruction for the purposes of registering the cutting rights transfer against the title to the land. Such documentation and transfer will be at the vendor’s cost and expense in all respects.\n\nNote: Care must be taken to make sure the plan is attached to the agreement and all signing parties initial every page of the attached plan. Also note that the parties will need to be aware of the provisions and implications of the Climate Change Response (Emissions Trading) Amendment Act 2008 and the Climate Change Response (Emissions Trading Forestry Sector) Amendment Act 2009 and the Climate Change Response (Moderated Emissions Trading) Amendment Act 2009.",
    embedding: null
  },
  {
    question: "What is the clause for 'Fertiliser'?",
    response: "E12: The vendor must spread [......] tonnes of [DESCRIPTION OF FERTILISER] on the property between the dates of [DATE] and [DATE]. The vendor must prior to settlement provide to the purchaser satisfactory evidence that the vendor has complied with the provisions of this clause.",
    embedding: null
  },
  {
    question: "What is the clause for 'Fertiliser (Specific Areas)'?",
    response: "E13: The vendor must put [......] tonnes of [DESCRIPTION OF FERTILISER] spread evenly over the part of the property marked “A” on the attached plan. The vendor must prior to settlement provide to the purchaser satisfactory evidence that the vendor has complied with the provisions of this clause.",
    embedding: null
  },
  {
    question: "What is the clause for 'Fertiliser - Vendor to Comply with the Purchaser’s Instructions'?",
    response: "E14: Once this agreement is unconditional, the vendor must spread fertiliser on the property where specified by the purchaser in accordance with the purchaser’s reasonable requests. The purchaser must pay the vendor the excess (including GST) on settlement if the total cost of the fertiliser and spreading of the fertiliser exceeds [$......] plus GST. The vendor must prior to settlement provide to the purchaser satisfactory evidence that the vendor has complied with the provisions of this clause.",
    embedding: null
  },
  {
    question: "What is the clause for 'Fertiliser - Vendor Warranty as to Application of Fertiliser'?",
    response: "E15: The vendor warrants that the following fertiliser has been put on the property since [DATE]:\n(a) [FERTILISER]\n(b) [FERTILISER]\n(c) [FERTILISER]\n\nThe vendor must prior to settlement provide to the purchaser satisfactory evidence that the vendor has complied with the provisions of this clause.",
    embedding: null
  },
  {
    question: "What is the clause for 'Drains'?",
    response: "E16: The vendor must clean all drains on the property or / the drains specified and marked on the attached plan (DELETE ONE) at the vendor’s cost before settlement date. The cleanings from the drains must be spread evenly over the paddocks adjacent to the drains.",
    embedding: null
  },
  {
    question: "What is the clause for 'Fonterra Clauses'?",
    response: "E17: NZLS Property Law Section members can access Fonterra Clauses at http://www.lawsociety.org.nz/law-society-services/law-society-sections/property-law-section/practitioner-resources. Non-members can access the clauses at https://www.fonterra.com/content/dam/fonterra-public-website/phase-2/new-zealand/pdfs-docs-infographics/pdfs-and-documents/pdf-nzls-fonterra-shares-clause-nov-2013.pdf",
    embedding: null
  },
  {
    question: "What is the clause for 'Guarantee of Rental of Property by Vendor'?",
    response: "F1: Prior to the possession date, the vendor must procure the execution by a tenant approved by the purchaser (which approval must not be withheld where the proposed tenant is respectable, responsible and solvent) of a deed of lease containing the following terms:\n(a) Rental of [$......] per annum;\n(b) A minimum term of [......] years;\n(c) Rental reviews at [......] yearly intervals;\n(d) Use: Such use as conforms with the requirements of the operative and any proposed District Plan and as is otherwise approved by the purchaser PROVIDED THAT such approval must not be unreasonably or arbitrarily withheld in the case of a use which is not noxious, offensive or illegal;\n(e) Commencement of rental: On or prior to the settlement date;\n(f) The personal covenants of the shareholders where the tenant is a company other than a public listed company;\n(g) Such other terms as are usual and reasonable.\n\nIf a lease as set out above is not arranged, the vendor must pay monthly in advance to the purchaser an amount equivalent to the monthly payments of rent and all other outgoings which would otherwise be payable if such tenancy had been arranged and such monthly payments will continue until a lease has been arranged by the vendor with such apportionment for any broken monthly period as may be appropriate.\n\nNote: The use of this clause should be undertaken only with careful specific legal advice as it may require the inclusion of various conditions which are the subject of both parties obtaining legal advice.",
    embedding: null
  },
  {
    question: "What is the clause for 'Approval of Leases'?",
    response: "F2: This agreement is conditional upon the purchaser’s lawyer approving in all respects all the leases to which the property is subject (“Leases”).\n\nThe vendor must make copies of the Leases available to the purchaser’s lawyer within [......] working days after the date of this agreement. The date for the satisfying of this condition is [......] working days after the purchaser’s lawyer receives copies of all the Leases. The purchaser’s lawyer may give or withhold approval of the Leases in his or her sole discretion.",
    embedding: null
  },
  {
    question: "What is the clause for 'Vendor’s Authority'?",
    response: "F3: The vendor warrants that:\n(a) The entry by it into this agreement has been duly authorised by all necessary action of the vendor; and\n(b) The vendor has full power and lawful authority to enter into this agreement and to perform or cause to be performed all of its obligations under this agreement and under each transaction contemplated by this agreement to be performed by the vendor.",
    embedding: null
  },
  {
    question: "What is the clause for 'Payment and Settlement Date for the Property Where the Title is to be Issued'?",
    response: "G1: The balance of the purchase price must be paid or satisfied by payment in cleared funds on the settlement date which is [......] working days after the date on which the purchaser receives notice from the vendor that a search copy of the title, as defined in section 172A of the Land Transfer Act 1952, is obtainable from the LandOnline database.\n\nNote:\n1. When using this clause, option (1) “By payment in cleared funds on the settlement date which is...” must be deleted from the Payment of Purchase Price section on the front page of the agreement. Do not delete option (2) “In the manner described in the Further Terms of Sale”. Clause 3.17 of the General Terms of Sale will not apply if this clause is used and it should be deleted or negated.\n2. Professional Advice Recommended. Given the complexity of clauses5 below, it is strongly recommended that licensees wishing to include these clauses in agreements should not allow parties to enter into agreements containing these clauses, or any other clause relating to vendor finance or to circumstances where the title has yet to be issued or to specific GST concerns, without first obtaining professional advice, where necessary, and ensuring the appropriate clauses have been inserted after consultation with the parties’ lawyers.",
    embedding: null
  },
  {
    question: "What is the clause for 'Payment and Settlement Date for the Property Where the Title is to be Issued'?",
    response: "G1: The balance of the purchase price must be paid or satisfied by payment in cleared funds on the settlement date which is [......] working days after the date on which the purchaser receives notice from the vendor that a search copy of the title, as defined in section 172A of the Land Transfer Act 1952, is obtainable from the LandOnline database.\n\nNote:\n1. When using this clause, option (1) “By payment in cleared funds on the settlement date which is...” must be deleted from the Payment of Purchase Price section on the front page of the agreement. Do not delete option (2) “In the manner described in the Further Terms of Sale”. Clause 3.17 of the General Terms of Sale will not apply if this clause is used and it should be deleted or negated.\n2. Professional Advice Recommended. Given the complexity of clauses5 below, it is strongly recommended that licensees wishing to include these clauses in agreements should not allow parties to enter into agreements containing these clauses, or any other clause relating to vendor finance or to circumstances where the title has yet to be issued or to specific GST concerns, without first obtaining professional advice, where necessary, and ensuring the appropriate clauses have been inserted after consultation with the parties’ lawyers.",
    embedding: null
  },
  {
    question: "What is the clause for 'Vendor Finance and Settlement Date'?",
    response: "G2: The balance of the purchase price must be paid or satisfied as follows:\n(a) by payment in cleared funds of [$......] on the settlement date which is [......]; and\n(b) by the purchaser executing in favour of the vendor a vendor finance agreement (“the vendor finance agreement”) secured by a first or / second (DELETE ONE) mortgage (“the vendor mortgage”) over the property for the sum [$......] on terms and conditions as are set out below.\n\nThe vendor finance agreement and vendor mortgage will be on the following terms and conditions:\n(a) Principal Sum: [$......] (the sum referred to in paragraph (b) of the immediately preceding clause).\n(b) Term: [......] years commencing on the settlement date.\n(c) Interest: Accrues at an ordinary rate of [......%] per annum on the outstanding Principal Sum, or accrues at a penalty rate of [......%] per annum on any part of the Principal Sum then due and unpaid. Interest is calculated daily on the basis of the actual number of days elapsed and a 365 day year until payment of the Principal Sum in full.\n(d) Interest Payment: Payable weekly or / monthly or / quarterly (DELETE AS APPLICABLE) in arrears as from settlement date.\n(e) Optional Principal Repayment: Payable on any interest payment date in multiples of [$......] or the full balance of the outstanding Principal Sum, in each case together with accrued but unpaid interest, with interest ceasing to accrue on such amount as from the date of repayment.\n(f) Form of Mortgage: In accordance with the terms of clause 9.10 of the General Terms of Sale and prepared by the vendor’s lawyer at the cost of the purchaser in all respects.\n(g) Priority Sum: Where the vendor’s mortgage is a second mortgage the priority afforded to the first mortgage must not be more than [$......] or / [......%] (DELETE ONE) of the purchase price.\n\nNote: It may be preferable to have a copy of the mortgage form attached to the agreement.\n\nCredit Contracts and Consumer Finance Act 2003 Disclosure Requirements\n\nNote 1: If the above clause 2 is used and the vendor finance agreement meets certain other requirements [see Notes 2, 3 and 4 below] the disclosure provisions of the Credit Contracts and Consumer Finance Act 2003 will apply and the parties should be notified of this by the real estate agent when the agreement is signed. Initial disclosure must be made by the vendor to the purchaser within five (5) working days of the date of the vendor finance agreement and it is important that each party seeks professional advice to ensure disclosure is carried out correctly and the requirements of the Act are satisfied.\n\nIt is important to note that the purchaser has a right to cancel the vendor finance agreement by written notice within three (3) working days of initial disclosure being made, and that the vendor finance agreement is not enforceable by the vendor until initial disclosure has been made. Initial disclosure is deemed to be made:\n(a) On the same day if made direct to the purchaser (e.g., handing documents direct to the purchaser); or\n(b) Two (2) working days after initial disclosure is sent if sent by electronic means (e.g., by email); or\n(c) Four (4) working days after initial disclosure is sent if documents are posted.\n\nNote 2: The provisions of the Credit Contracts and Consumer Finance Act 2003 outlined in Note 1 above shall apply only where:\n(a) The purchaser is a natural person (i.e., the purchaser is not a family trust, company or incorporated society or body); and\n(b) The agreement is for personal, domestic or household purposes (i.e., it is not for a business or investment purpose); and\n(c) The vendor is someone who carries on the business of providing credit or does that as a side business or the parties were introduced by a paid adviser or broker; and\n(d) The balance of the purchase price is payable at a date more than 2 months from the date of the vendor finance agreement.\n\nNote 3: Where Notes 2 (a), (b), (c) and (d) all apply, initial disclosure must be made to the purchaser and the vendor cannot enforce the vendor finance agreement until the relevant timeframe in Notes 1 (a), (b) or (c) expire, whichever is appropriate depending on the circumstances.\n\nNote 4: Examples of situations where Note 2(c) above applies are where the vendor is a bank, a property developer or a solicitor’s nominee company. Another example is where the vendor is a private client of the purchaser’s lawyer introduced to the purchaser by that lawyer.\n\nIncome Tax and GST\n1. If there is to be a sale on terms with settlement more than 93 days after the date of the agreement the transaction may be affected by the accruals provisions of the Income Tax Act 2007.\n2. The provisions of the Goods and Services Tax Act 1985 might require payment of GST by the vendor on the whole purchase price at the time of payment of the deposit or first instalment.\n\nLegal Advice\nParties should not enter into agreements containing the above clause or any other clause relating to vendor finance without obtaining legal advice and ensuring the appropriate clauses have been prepared after consultation with the parties’ lawyers. The provisions of the Credit Contracts and Consumer Finance Act 2003, Income Tax Act 2007 and Goods and Services Act 1985 may apply and it is extremely important that each party obtain professional advice before the agreement is drafted and signed. Note that this clause and any other clause relating to vendor finance may be further affected by the law reform currently proposed by the Credit Contracts and Financial Services Law Reform Bill, about which professional advice should also be obtained.",
    embedding: null
  },
  {
    question: "What is the clause for 'Payment by Instalments and Settlement Date'?",
    response: "G3: The balance of the purchase price must be paid in cleared funds of [$......] by instalments on the post-settlement dates as specified below:\n\n1. An instalment of [$......] payable on [DATE];\n2. An instalment of [$......] payable on [DATE];\n3. An instalment of [$......] payable on [DATE];\n4. An instalment of [$......] payable on [DATE];\n\nThe remainder of the purchase price must be paid or satisfied by payment in cleared funds together with any unpaid instalments as set out above together with default interest accrued thereon on [DATE].\n\nAny instalment of the purchase price unpaid on the due date for payment will attract default interest in accordance with the terms of clause 3.12(1) of the General Terms of Sale.\n\nNote: When using this clause, option (1) “By payment in cleared funds on the settlement date which is...” must be deleted from the Payment of Purchase Price section on the front page of the agreement. Do not delete option (2) “In the manner described in the Further Terms of Sale”. The parties should seek legal advice before agreeing to this condition.",
    embedding: null
  },
  {
    question: "What is the clause for 'Payment by Goods as Part Payment and Settlement Date'?",
    response: "G4: The balance of the purchase price must be paid or satisfied as follows:\n(a) by payment in cleared funds of [$......] on the settlement date which is [DATE].\n(b) The sum of [$......] will be satisfied by the purchaser transferring to the vendor on settlement date ownership of the following items:\n\n(i) [ITEM]\n(ii) [ITEM]\n\nThe purchaser warrants that the items listed above are or will be by the settlement date:\n(a) The unencumbered property of the purchaser and the purchaser will transfer good and clear title to the items; and\n(b) In good working order and repair.\n\nIf any of the items listed above require a notice, certificate or written evidence of change of ownership then the purchaser must provide the vendor on settlement with a valid signed and registrable form of such notice of change of ownership as a requirement of settlement.\n\nNote: When using this clause, option (1) “By payment in cleared funds on the settlement date which is.” must be deleted from the Payment of Purchase Price section on the front page of the agreement. Do not delete option (2) “In the manner described in the Further Terms of Sale”. Note that this clause could be scrutinised by the Inland Revenue Department if there is any suggestion of values of the goods referred to not being able to be sustained as Market Value. Therefore, there is the potential for a tax implication in respect of any significantly inaccurate valuation of goods used as part payment of a property transaction.",
    embedding: null
  },
  {
    question: "What is the clause for 'Payment by Way of a Long-Term Agreement for Sale and Purchase and Settlement Date'?",
    response: "G5: The balance of the purchase price must be paid or satisfied by a part payment in cleared funds of [$......] on the possession date which is [DATE].\n\nThe remaining balance of the purchase price being the sum of [$......] must be paid or satisfied by payment in equal consecutive monthly payments of [$......] on the [......] day of each month. The first of such payments is payable [......] month(s) from the possession date. Such payments will be applied by the vendor:\n(a) first in payment of interest, which accrues at the rate of [......%] per annum on the outstanding amount of the purchase price (or accrues at a penalty rate of [......%] per annum on any part of the purchase price then due and unpaid), and which is calculated daily on the basis of the actual number of days elapsed and a 365 day year until payment of the purchase price in full; and\n(b) secondly in reduction of the balance of the purchase price. The final payment of the balance of the purchase price must be paid in cleared funds on the settlement date which is [DATE].\n\nOn any of the above monthly payment dates the purchaser may make additional payments in multiples of [$......] in reduction of the balance of the purchase price. Interest on any sum repaid will cease to accrue as from that interest payment date. The making of an additional payment in reduction of the purchase price will not relieve the purchaser of the obligation to continue to make the compulsory periodic payments as set out above, until the purchase price is paid in full.\n\nDuring the term of this agreement all covenants contained in the ADLS form of Memorandum of Mortgage No 2011/4299 will be imported into this agreement as if they were terms of this agreement. The purchaser must comply with those covenants to the intent that a breach by the purchaser of any of those covenants will be a breach of this agreement. Without limiting the generality of the foregoing, if the purchaser fails to meet its obligations under this clause the vendor may exercise the rights and powers conferred in that Memorandum.\n\nThe proceeds of any insurance claim received by the vendor or the vendor’s mortgagee may be applied (subject to the vendor’s mortgagee’s approval) in or towards payment of the balance of the purchase price and any moneys owing hereunder.\n\nWhile the balance of the purchase price remains owing the vendor may at the vendor’s option require the purchaser to take title to the property and to execute in favour of the vendor and/or the vendor’s nominee a registrable first mortgage over the property securing the balance of the purchase price on the following terms:\n(a) The mortgage will be for a term commencing from the date that the purchaser delivers the signed mortgage to the vendor and ceasing on the date specified for the final payment of the balance of the purchase price as set out above, together with interest thereon at the rate specified above and all other terms and conditions will be in accordance with the provisions as set out above with any necessary modifications; and\n(b) The mortgage will be prepared by the vendor’s lawyer at the expense in all respects of the purchaser. It will include all the terms set out above and it will otherwise be on the form as specified in clause 10.10 of the General Terms of Sale.\n\nPending the purchaser taking title, the vendor will be at liberty to mortgage or re-mortgage the property provided that the sum secured at any time by such mortgage or mortgages must not exceed the balance of the purchase price from time to time owing to the vendor. The vendor will apply any payments received on account of the purchase price from the purchaser in reduction of the principal sum or sums secured by such mortgage or mortgages. In the event that the purchaser registers a caveat against the title to the property the purchaser must at the cost of the purchaser sign a consent to the registration of any such mortgage by or on behalf of the vendor upon request being made by the vendor provided the vendor complies with this clause at all times.\n\nThe purchaser may elect to remedy any default by the vendor under any mortgage registered against the property and any moneys paid by the purchaser in doing so will be deemed to be an additional payment in reduction of the purchase price as provided for above.\n\nIf the purchaser sells, exchanges or otherwise disposes of the property during the continuance of this agreement, then the balance of the purchase price and all other moneys owing under this agreement will be due and payable in full on settlement of the sale, exchange or disposal of the property by the purchaser.\n\nNote 1: Please refer to the notes under clause above (Vendor Finance and Settlement Date) in respect of the Credit Contracts and Consumer Finance Act 2003, Income Tax Act 2007 and Goods and Services Tax Act 1985. Please read over these notes carefully before inserting the above clause G1 (Payment by Way of a Long Term Agreement for Sale and Purchase and Settlement Date) into an agreement.\n\nNote 2: When using this clause, option (1) “By payment in cleared funds on the settlement date which is...” must be deleted from the Payment of Purchase Price section on the front page of the agreement. Do not delete option (2) “In the manner described in the Further Terms of Sale”. Parties should take legal advice before agreeing to clause 5.",
    embedding: null
  },
  {
    question: "What is the clause for 'Insurance Condition'?",
    response: "H1: This agreement is conditional upon the purchaser arranging building insurance in respect of the buildings and any other improvements on the property on terms and conditions satisfactory to the purchaser in all respects within [......] working days of the date of this agreement. This condition is inserted for the sole benefit of the purchaser.\n\nOr\n\nThis agreement is conditional upon the purchaser arranging building insurance in respect of the buildings and any other improvements on the property on terms and conditions satisfactory to the purchaser within [......] working days of the date of this agreement. The terms and conditions are deemed to be satisfactory to the purchaser and this condition is deemed to be satisfied if insurance is available to the purchaser on substantially the same terms and conditions as is currently maintained by the vendor in respect of the property.",
    embedding: null
  },
  {
    question: "What is the clause for 'Insurance Disclosure (to use with clause H 1.1)'?",
    response: "H2: The vendor must supply the purchaser with a copy of the vendor’s building insurance policy for the property including any relevant policy schedules, and any and all insurance details and information which relate to the property, within [......] working days of the date of this Agreement.",
    embedding: null
  },
  {
    question: "What is the clause for 'Professional Reports Conditions'?",
    response: "H3: This agreement is conditional upon the purchaser being satisfied in all respects with the condition of the property after obtaining at the purchaser’s cost such professional reports as the purchaser thinks fit including but not limited to a building inspection report, a structural engineering report, and a geotechnical engineering report. The professionals must not carry out any invasive testing of any buildings without the vendor’s prior written consent. However, geotechnical professionals may carry out invasive testing of the land by test drilling and any other tests necessary to ascertain the land conditions, subject to prior consultation with the vendor as to the extent of the tests required and provided that the land is restored as near as is practicable to its previous condition.\n\nThe date for the satisfying of this condition is [......] working days after the date of this agreement. This condition is inserted for the sole benefit of the purchaser.",
    embedding: null
  },
  {
    question: "What is the clause for 'Earthquake Claims Condition'?",
    response: "H4: The vendor must supply to the purchaser within five (5) working days of the date of this agreement all information about earthquake claims, repairs and settlements insofar as it relates to the property, including but not limited to the following information:\n(a) Full details of any damage to the property that has been caused by earthquakes;\n(b) All EQC and private insurer claim information;\n(c) Full details of any earthquake repairs that have been completed, or which are still to be completed, including the scope of works, and any confirmation that repairs have been completed; and\n(d) Full details of any insurance claims that have been settled in relation to the property, including details of any payments made by the EQC or the private insurer pursuant to the claims.\n\nThe vendor must provide authority for the purchaser to contact the EQC and to discuss all details relating to the property, including the EQC claims, within five (5) days of the date of this agreement.\n\nThis agreement is conditional upon the purchaser approving the earthquake claims information provided pursuant to clauses 4.1 and 4.2 above in all respects within ten (10) working days of the date of this agreement. This condition is inserted for the sole benefit of the purchaser.",
    embedding: null
  }
]
 const faqCodeData = [
    {
      question: "What is the title of the document establishing professional conduct for real estate agents?",
      response: "The document is titled 'Real Estate Agents Act (Professional Conduct and Client Care) Rules 2012'. It sets out the rules made by the Real Estate Agents Authority to establish minimum standards for professional conduct and client care that all licensed agents, branch managers, and salespersons must meet. This framework is crucial for maintaining industry integrity and client trust. For further details, refer to the full document [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "When did the Real Estate Agents Act (Professional Conduct and Client Care) Rules 2012 come into effect?",
      response: "These rules came into force on April 8, 2013, providing a legal framework for conduct and client care in the real estate industry. This marked an important update from previous regulations, ensuring that all transactions are handled with a high standard of professional ethics and client consideration. It highlights the sector's commitment to continual improvement and adaptation to legislative requirements. More information is available in the document [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What is the scope and objectives of the Real Estate Agents Authority's code of professional conduct?",
      response: "The scope covers conduct and client care for all licensees—agents, branch managers, and salespersons—establishing standards for real estate agency work and client handling. The objective is to set minimum, yet comprehensive, standards for professional behavior, aiming to ensure the public is treated fairly and professionally. This framework acts as a reference point for conduct, ensuring agents align with both legal and ethical expectations. Detailed objectives and scope explanations are outlined in the document [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What is detailed under 'Interpretation' in the conduct rules document?",
      response: "Interpretation clarifies key terms used throughout the rules, ensuring consistency and clarity in application. Terms such as 'Act', 'customer', and 'prospective client' are defined in context with their legal definitions, facilitating better understanding and implementation of these rules by all stakeholders in real estate transactions. This section helps prevent ambiguity or misapplication, supporting informed and compliant practice. Comprehensive interpretation details can be found [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What are the 'Standards of Professional Competence' required for licensees?",
      response: "The standards demand licensees to always exercise skill, care, competence, and diligence in their duties. It also requires them to possess a strong understanding of all laws, regulations, and rules issued by the Authority related to real estate work. This ensures they provide informed and proficient service, enhancing confidence from clients and valuing industry standards. Detailed explanations are available [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What constitutes the 'Standards of Professional Conduct' for licensees?",
      response: "Licensees are required to adhere to fiduciary obligations and act in good faith. They must engage with clients and other parties fairly, not providing misleading information or engaging in conduct that might harm the industry's reputation. These standards are foundational in sustaining trust and promoting ethical business practices across all transactions. Further details are in the document [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What is the 'Duty to Report Misconduct or Unsatisfactory Conduct'?",
      response: "Licensees must report reasonable suspicions of misconduct or unsatisfactory conduct by others to the Real Estate Agents Authority. This duty helps maintain professional integrity and accountability within the industry. Failing to report such actions may compromise client trust and the industry's standards. Full guidelines detailing the process and responsibilities are provided [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What are the 'Duties and Obligations of Agents' according to the code?",
      response: "Agents must prominently display these conduct rules, ensure the appropriate supervision and management of their salespersons, and facilitate education related to real estate laws and practices. This ensures everyone involved in real estate services adheres to the highest standards of practice and continuous professional development. Detailed obligations for agents in various operational contexts are outlined [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "How is 'Client and Customer Care' addressed in the conduct rules?",
      response: "The rules require licensees to act in their clients' best interests by following instructions lawfully, and communicating effectively while safeguarding sensitive information. This care extends to ensuring fair treatment and transparency, maintaining confidentiality, and avoiding conflicts of interest. These practices underscore the commitment to ethical dealings and enhancing consumer confidence in real estate engagements. Comprehensive care expectations for both clients and customers can be reviewed [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What specific care rules apply to sellers' agents?",
      response: "Sellers' agents must deliver appraisals reflecting current market conditions and comparable sales. They are required to clearly communicate how chosen sale methods impact benefits received and provide commission terms in writing. These standards ensure clarity, transparency, and integrity in dealings with sellers, maintaining trust and preventing disputes. Specific guidelines and rules for sellers' agents are available [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What are the client care obligations for buyers' agents?",
      response: "Buyers' agents are responsible for providing written explanations of commission structures, ensuring offers align with buyer instructions, and managing all interactions transparently under agency agreements. These obligations ensure buyers make informed decisions supported by expert advice, promoting satisfied client experiences. Detailed care obligations for buyers' agents can be accessed [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What information about complaints must be provided according to the conduct rules?",
      response: "Agents must maintain and make available written in-house complaints and dispute resolution procedures, informing clients about these processes and the Authority’s complaints system. This empowers and protects clients by offering avenues for addressing grievances effectively, contributing to an industry environment that encourages accountability. Full details on complaint handling and requirements are outlined [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What happens under 'Revocation' in the conduct rules?",
      response: "The 2012 rules revoke the previous 2009 set, indicating an update aligned with new legislative mandates. This change ensures that current real estate practices meet modern legal requirements and industry expectations, reflecting advances and enhancements in professional standards. Details on the revocation process and implications for practice adjustments are provided [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
      question: "What important notes are included regarding the Real Estate Authority's name and use?",
      response: "Although the operating name is the Real Estate Authority (REA), the publication adheres to using 'Real Estate Agents Authority (REAA)' for legal consistency in alignment with legislative requirements. This consistency is essential for clarity in legal and administrative processes. For further insights and explanations, review the important notes [here](https://drive.google.com/file/d/1iy1DFfS67onURZ6ip3XW4dbzyBrhwku2/view?usp=drive_link).",
      embedding: null
    },
    {
        question: "How to upgrade from platinium to gold",
        response: "trademe",
        embedding: null
      },{
        question: "What are the different listing zones, and how do they affect pricing?",
        response: "trademe",
        embedding: null
      },{
        question: "Why are prices different for each zone?",
        response: "trademe",
        embedding: null
      },{
        question: "Can I list in multiple zones at the same time?",
        response: "trademe",
        embedding: null
      },{
        question: "in which zone is *city*",
        response: "trademe",
        embedding: null
      },{
        question: "how much is picing for *ciuty",
        response: "trademe",
        embedding: null
      },  {
        question: "How to upgrade from Platinum to Gold?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What are the different listing zones, and how do they affect pricing?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Why are prices different for each zone?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Can I list in multiple zones at the same time?",
        response: "trademe",
        embedding: null
      },
      {
        question: "In which zone is *city*?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How much is pricing for *city*?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What does a Platinum listing include?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What benefits do I get with a Gold listing?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How does a Silver listing compare to Gold and Platinum?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What is a Base Listing, and what does it include?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Do the package prices include GST?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Can I pay for a listing in installments?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How long does my listing stay active?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Can I edit my listing after it's published?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How do I check if my listing is under a Partnership Agreement?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What happens when my listing expires?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How does a Boost work?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What is Audience Extension, and can I use it multiple times?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How long does Audience Extension last?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Does Audience Extension guarantee more views?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What is a Super Feature, and how does it work?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What is the difference between Super Feature and Super Feature Renewal?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Can I manually refresh my listing for better visibility?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How does suburb targeting work?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How do I improve my listing’s ranking in search results?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Does a Platinum listing guarantee more inquiries?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How do I track my listing's engagement and performance?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What are the listing options for rental properties?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What happens when a rental Premium listing expires?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Can I list a short-term rental property?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What are the pricing options for commercial property listings?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Are commercial listings included in Platinum and Gold packages?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How do I contact customer support for listing issues?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How do I add images and videos to my listing?",
        response: "trademe",
        embedding: null
      },
      {
        question: "My listing isn’t appearing in search, what should I do?",
        response: "trademe",
        embedding: null
      },
      {
        question: "How do I update my contact details on a listing?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Are there any restrictions on what I can list?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Can I cancel my listing before it expires?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What happens if my property doesn’t sell within the listing period?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Can I list a property without a real estate license?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Does Trade Me Property guarantee a sale?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What are the terms for terminating a Partnership Agreement?",
        response: "trademe",
        embedding: null
      },
      {
        question: "What notice period is required to cancel a listing?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Can I get a refund if I remove my listing early?",
        response: "trademe",
        embedding: null
      },
      {
        question: "Does my listing appear on other websites like Homes.co.nz?",
        response: "trademe",
        embedding: null
      }, {
        question: "What is the 'Cool Down' period mentioned in the Agency Agreement and how does it apply?",
        response: "The 'Cool Down' period allows for the cancellation of a Sole Agency without penalty up to 5pm on the first working day after a copy of the signed agreement is given, with the cancellation advice required to be in writing and received by the agent before the deadline.",
        embedding: null
      },
      {
        question: "What authority does the Client have to sign the Agency Agreement?",
        response: "The Client has the authority to sign the listing agreement on behalf of the owner(s), as directors of the owner, as agent of the owner(s), on behalf of the owner(s), or as Trustee(s), without requiring any other signatures or authorities.",
        embedding: null
      },
      {
        question: "What are the responsibilities of the Client regarding other agency selling arrangements and current buyer interest?",
        response: "The Client must ensure that there are no other agencies or private sale arrangements in place without informing the agent. In a Sole Agency, the Client must immediately end any existing marketing or purchaser interest from other parties and provide details of any continuing interest to the agent.",
        embedding: null
      },{
        question: "What permission does the Client give regarding the collection and use of information by the agent?",
        response: "The Client gives permission for the agent to collect and use information about the property, the Client, and occupants from various sources for marketing and disclosure purposes. The Client authorizes the use of photos, videos, and other media for marketing, with the understanding that all information can be used publicly.",
        embedding: null
      },
      {
        question: "What information must the Client disclose or be willing to disclose regarding the property?",
        response: "The Client must disclose any information, known or discovered later, that may be of concern or interest to a purchaser, including issues like drug contamination. All such pertinent information must be noted in writing for the Agent's awareness.",
        embedding: null
      },
      {
        question: "What is the Client's responsibility regarding setting the advertised price?",
        response: "The Client has full responsibility for setting the advertised price, which should be advertised as instructed by the Client. The Client must be prepared to accept offers at the advertised price and consider conditional offers at that level as well.",
        embedding: null
      },
   
      {
        question: "What does the Client agree to do immediately before the marketing starts?",
        response: "The Client agrees to supply necessary information and access to the property, provide details about tenants if applicable, and ensure compliance with legal requirements for different property types. They also authorize the agent to gather relevant information for compliance purposes.",
        embedding: null
      },
      {
        question: "What is the indemnity clause in the agreement?",
        response: "The Client indemnifies the Agent, Licensees, and relevant personnel against losses or liability arising from inaccurate information or omissions by the Client in the agreement.",
        embedding: null
      },
      {
        question: "What obligations does the Client have regarding health and safety?",
        response: "The Client acknowledges the Agent's obligations under the Health and Safety at Work Act and agrees to provide assistance and information to ensure no hazards or risks at the property affect the health and safety of any person involved.",
        embedding: null
      },{
        question: "What is required of the Client regarding Client Due Diligence?",
        response: "The Client acknowledges the Anti-Money Laundering and Countering Financing of Terrorism Act requirements and agrees to provide information for customer due diligence purposes. They authorize the collection and verification of personal details for compliance.",
        embedding: null
      },
      {
        question: "How are notices to be given under the agreement?",
        response: "Notices can be served by hand, mail, fax, or email. Different methods have specific timelines for when they are deemed received. Multiple contact details for the Client allow flexibility in sending notices.",
        embedding: null
      },
      {
        question: "What options does the Client have regarding methamphetamine testing of the property?",
        response: "The Client can agree to have the property tested for methamphetamine and allow disclosure of the results to potential purchasers, confirm that testing has been done, or indicate that no testing has been conducted.",
        embedding: null
      },{
        question: "What is required of the Client regarding Client Due Diligence?",
        response: "The Client acknowledges the Anti-Money Laundering and Countering Financing of Terrorism Act requirements and agrees to provide information for customer due diligence purposes. They authorize the collection and verification of personal details for compliance.",
        embedding: null
      },
      {
        question: "How are notices to be given under the agreement?",
        response: "Notices can be served by hand, mail, fax, or email. Different methods have specific timelines for when they are deemed received. Multiple contact details for the Client allow flexibility in sending notices.",
        embedding: null
      },
      {
        question: "What options does the Client have regarding methamphetamine testing of the property?",
        response: "The Client can agree to have the property tested for methamphetamine and allow disclosure of the results to potential purchasers, confirm that testing has been done, or indicate that no testing has been conducted.",
        embedding: null
      },{
        question: "Can Kiwisaver deposits be processed through Public Trust o/a NZ Real Estate Trust?",
        response: `Yes - NZRET can hold Kiwisaver deposits. NZ Real Estate Trust can give an undertaking re Kiwisaver deposits.
NZ Real Estate Trust is a product of SafeKiwi (New Zealand) Limited. SafeKiwi's Terms of Use provide that through the Public Trust, as custodian, the funds are held as a stakeholder thus aligning the obligations of SafeKiwi with the stakeholder provisions which are included in the REINZ/ADLS Agreement for Sale and Purchase`,
        embedding: null
      },{
        question: "Why doesnt Public Trust o/a NZ Real Estate Trust accept cash deposits?",
        response: `All payments to Public Trust o/a NZ Realestate Trust must be made from a bank account as an electronic payment (eg bank transfers and internet payments). Public Trust does not accept cash payments. The agency must protect all parties to the transactions especially with regards to the Anti-Money Laundering Act (AML) and the agency's obligations under it. If a sale falls and a deposit has been paid in cash, Public Trust cannot refund as a cash payment as they are not a bank. The deposit must be paid from a bank account so that there is a clear trail of where funds have originated from for AML purposes and in the case of a refund, returned to the bank account they were originally debited from. In the unusual instance where a cash deposit was made, this can only be refunded to the Lawyers Law Firm's Trust account (who for AML purposes has the Lawyer/Client relationship).`,
        embedding: null
      }
          ,{
        question: "Why are Deposit Payment Instructions, Receipts and Disbursement Advices which are emailed directly from NZRET to a recipient not being received?",
        response: `This is due to the email recipients' email service provider security settings which are blocking the emails. It is not a NZRET issue. Email service providers may block emails to protect the recipient from unwanted or malicious emails such as phishing, scams and spam. When NZRET emails are not being received the email service is mistakenly blocking the legitimate email.
In order to resolve this situation, please follow the steps below;
Double check that the email address that entered is correct and valid.
Ask the intended email recipient to check their 'spam' and/or 'junk' email folders.
Ask them to add the following NZRET email address (support@realestatetrust.co.nz AND no-reply@realestatetrust.co.nz) to their safe list in their email settings to unblock the address. Once they have done this then arrange to send another email directly to the recipient via the NZRET system.
If adding the NZRET email address to their safe list does not work, then they will have to contact their email service provider directly and ask them to unblock the NZRET email address.
If the email service is unable to unblock the NZRET email address then provide the recipient with a printed copy of the deposit payment instructions, receipt or disbursement advice that you are trying to send.`,
        embedding: null
      },{
        question: "Overseas payment details for Banks/When a deposit is being paid by an overseas bank transfer what information would the purchaser require?",
        response: `In this case the Purchaser would require additional bank deposit information. Please inform accounts and they will contact NZRET Customer Support to obtain the details needed including the bank SWIFT code.
PLEASE NOTE: It is very important that you advise the Purchaser to pay all associated bank fees and charges, including for the receiving bank charges to ensure that the correct deposit amount is received by Public Trust o/a NZ Real Estate Trust for the relevant sale. Also ask the Purchaser to email through a copy of the International funds transfer for proof of payment confirmation.`,
        embedding: null
      },{
        question: "How do I know if a deposit has been paid?",
        response: `The purchaser should have provided proof of payment to the agency as the agency should have made the Purchaser aware of what is expected and that proof of payment will be required.
The deposit funds will automatically be allocated to the sale by Public Trust on the following business day after being deposited. This is normally completed by 9am. 
Accounts will tick the “Deposit received” box in Eagle contracts that will trigger automations to inform vendor’s solicitor, purchaser’s solicitor and agent that the deposit has been received.`,
        embedding: null
      },{
        question: "If you were expecting a deposit and it is not showing:",
        response: `Please note that funds paid on a non-business day or today may not appear in the trust account until the next business day. If you haven't received a notification regarding a deposit by the following business day, please contact Accounts. Accounts will verify whether proof of deposit payment has been emailed and ensure that all details entered are correct.
If proof of deposit payment has not been sent to Accounts, you will need to obtain it from the purchaser. Accounts will then load the proof into the NZRET system and submit a query deposit.
`,
        embedding: null
      },{
        question: "What happens if the Purchaser pays funds (i.e. settlement funds) into the Public Trust o/a NZ Real Estate Trust account in error?",
        response: `For an audit trail and AML purposes, the Payer of the funds should always contact their Bank to get the funds urgently reversed. It is the Bank that has the relationship with the client (i.e. knows their client for AML), therefore it is the Bank's responsibility to get the funds reversed.
It is not the role of Public Trust or NZRET to organise the return of funds paid to Public Trust in error.`,
        embedding: null
      },{
        question: "Settlement is due to occur in the next few days or settlement has been brought forward and funds held in trust are not cleared for release, what can our agency do?",
        response: `Public Trust o/a NZ Real Estate Trust must have written confirmation from the Purchaser's bank that the deposit funds paid are cleared and will not be reversed. This confirmation must be addressed to Public Trust o/a NZ Real Estate Trust and emailed to support@realestatetrust.co.nz so that funds can be cleared immediately to allow you to release the funds held in trust.`,
        embedding: null
      },{
        question: "What Do I Do If a Lawyer Won't Provide Authorisation to Release the Deposit? PLEASE NOTE: For an early release or for a unit title property you must have the authorisation from both the parties Lawyers to release the deposit funds. This is a legal requirement.",
        response: `Ascertain whether there is a dispute. If there is, the funds must stay in trust until both Lawyers confirm in writing that the dispute is resolved and the funds can be released. Please also notify NZRET Support of the dispute.
If there is no dispute and the Lawyer states there is no need for them to sign an authorisation to release the deposit funds, the agency will:
After the statutory 10 working days, as long as the property is not a unit title property, accounts must send an email to the Lawyer/Lawyers to advise it is being released. This covers the Agency in case there is any doubt as to intention.`,
        embedding: null
      },{
        question: "What happens in Eagle when a property goes unconditional?",
        response: `The agent ticks “All conditions met” in Eagle.
Accounts automatically receives an email alert.
Accounts downloads the Sale and Purchase Agreement from Eagle and reviews it for deposit terms.
Next steps depend on whether a deposit is specified in the contract or if it is a no-deposit arrangement.`,
        embedding: null
      },{
        question: "Where is the deposit held, and why do we use NZ Real Estate Trust?",
        response: `All deposit funds go to a third-party trust account, NZ Real Estate Trust (NZRET).
This ensures adherence to consistent, industry-compliant best practices and provides transparency for all parties.`,
        embedding: null
      },{
        question: "How does the deposit instruction process work?",
        response: `NZRET sends the purchaser a “deposit instruction” with the account number, reference details, etc.
After that, Accounts (through Eagle) notifies the agent that instructions have been sent.
The purchaser must email proof of payment (e.g., a screenshot of a bank transfer) to accounts@ownly.nz.`,
        embedding: null
      },{
        question: "How do I know the deposit has been received?",
        response: `
NZRET allocates funds to the contract the next working day after they land in the trust account.
The purchaser receives an automatic receipt from NZRET.
Accounts marks “Deposit Received” in Eagle, which triggers:
A reminder to the agent to obtain deposit release authorizations from solicitors.
Email notifications to the purchaser’s and vendor’s solicitors that the deposit is being held by NZRET.`,
        embedding: null
      },{
        question: "What must happen before a deposit is released from NZRET?",
        response: `A signed Sale and Purchase Agreement must be uploaded in Eagle.
Proof of deposit payment is on file (from the purchaser).
The correct solicitor authorities/confirmations must be received, depending on the release type (10-day standard, early release, unit title, or auction).
The statutory timeframe has passed:
Standard release: 10 working days.
Early release: Minimum 3 working days plus written approvals (subject to confirmation if there are any possible exceptions).
Auction: Immediate or 10-day hold depends on the clauses in the signed auction agreement.`,
        embedding: null
      },{
        question: "How is deposit release handled under a standard (10-day) unconditional sale?",
        response: `You need written authority from the purchaser’s solicitor confirming:
The agreement is unconditional,
The property is not unit title, and
Funds can be released after a 10-day trust hold.
Once that confirmation is in, Accounts emails the purchaser’s solicitor (copying the vendor’s solicitor) to confirm no dispute/cancellation and finalize the release.`,
        embedding: null
      },{
        question: " How does early release work if we want to release the deposit before 10 days?",
        response: `Both the vendor’s and purchaser’s solicitors must confirm that:
The agreement is unconditional,
It’s not a unit title,
The requisition period has expired or been waived,
They authorize early release.
The deposit must still be held at least three working days before early release.
Accounts then uploads all required confirmations to NZRET and completes the release process.`,
        embedding: null
      },{
        question: "What if the property is a unit title?",
        response: `Unit title deposits typically are only released once the pre-settlement disclosure is approved by the purchaser’s solicitor.
Written authority from both solicitors is required, confirming all conditions are met or waived.
Once these conditions are satisfied, the deposit can be disbursed from the trust.`,
        embedding: null
      },{
        question: "How do auction sales differ regarding deposit release?",
        response: `Auction agreements are unconditional from signing.
If a clause authorizes immediate release of deposit funds, the deposit can be released as soon as the funds clear.
Otherwise, standard hold periods apply (often 10 working days) unless the solicitors confirm otherwise.`,
        embedding: null
      },{
        question: "What if the deposit covers the entire commission?",
        response: `NZRET releases just enough to pay Ownly’s commission; the rest goes to the vendor’s solicitor.
Accounts sends a disbursement advice to the vendor’s solicitor and copies the agent.
Once the commission arrives in Ownly’s account, Accounts sends the vendor’s solicitor a paid invoice and receipt.`,
        embedding: null
      },{
        question: "What if the deposit is not enough to cover the commission?",
        response: `The entire deposit is sent to Ownly.
That partial amount is applied to the commission invoice.
Any remaining commission is due at settlement.
Once final payment is received, Accounts issues a final receipt.
`,
        embedding: null
      },{
        question: "How do we handle no-deposit contracts (or deposits paid directly to the vendor’s solicitor)?",
        response: `When a sale goes unconditional under these terms, Accounts immediately sends a commission statement/invoice to the vendor’s solicitor.
Commission is due on settlement day.
A receipt is issued once the vendor’s solicitor pays.`,
        embedding: null
      },{
        question: "When does Ownly pay the agent their commission?",
        response: `Ownly pays agents every Thursday for all cleared funds received on or before Tuesday of that week.
If funds clear after Tuesday, payment happens the following Thursday.`,
        embedding: null
      },{
        question: " How is my commission split calculated?",
        response: `Gross Commission (e.g., $20,000)
Less 10% Ownly Franchise Fee (10% of $20,000 = $2,000)
Distributable Agent Commission = $18,000
Less 10% Ownly Office Split (10% of $18,000 = $1,800)
Subtotal = $16,200 (Agent’s base)
Less advertising/marketing on-charges (varies by property)
Net Agent Commission = final amount paid out.`,
        embedding: null
      },{
        question: "Where do I find my commission details in Eagle?",
        response: `Contracts > [Select Property] > Commissions tab, or
Admin > Reports > Commission > Agent Commissions or Agent Deductions.
Non-property-related deductions appear under Admin > Agent Ledgers.`,
        embedding: null
      },{
        question: " What’s included in the base marketing fee?",
        response: `Standard base marketing covers AML checks, titles, instruments, admin, and web feeds, costing $400.
For off-market listings, the flat rate is $150.`,
        embedding: null
      },
      {
        question: "When do vendors pay for vendor-paid upfront marketing?",
        response: `Vendors must pay before the property goes live.
Accounts issues a receipt each time marketing funds are received.
Eagle’s “Property Details” is updated accordingly.`,
        embedding: null
      },
      {
        question: "When do agents pay for agent-paid upfront marketing, and how does the credit card fee work??",
        response: `Due within 10 days of the property going live.
Agents can pay by bank transfer or credit card. Credit card payments incur a 3.2% transaction fee.
Accounts sends an invoice and a receipt once payment is processed.
The Eagle “Property Details” page is updated to show the payment or credit card charge.`,
        embedding: null
      },
      {
        question: "What if a signed Sale and Purchase Agreement isn’t in Eagle?",
        response: `Accounts cannot finalize deposit instructions or release without a fully signed agreement.
Agents must upload the agreement so Accounts can confirm terms and deposit requirements.
`,
        embedding: null
      },
     
    ]
    
  
 
    module.exports = { faqCodeData,faqData, UsefulClauseData};
