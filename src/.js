const faqData = [
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
        response: "To create a recurring task in Eagle Software: Navigate to 'Tasks', click 'New Task' and enter the task details. Then, select the 'Repeat' option and choose the recurrence pattern (daily, weekly, monthly, etc.), and save the task. More details are available at: https://eaglesoftware.help/en/articles/2717094-how-to-create-a-recurring-task",
        embedding: null
      },
      {
        question: "How do I manually start an automation in Eagle Software?",
        response: "To manually start an automation in Eagle Software: Navigate to the 'Automations' section, select the automation you want to trigger, and click 'Run Now' to execute it immediately. More details are available at: https://eaglesoftware.help/en/articles/2717093-how-to-manually-start-an-automation",
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
  },
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
    question: "What embedded content formats are supported for Trade Me in Eagle Software?",
    response: "Eagle Software supports various embedded content formats for Trade Me. For a complete list of supported formats, visit: https://eaglesoftware.help/en/articles/4030064-trade-me-embedded-content-supported-formats",
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
    question: "What embedded content formats are supported for Trade Me in Eagle Software?",
    response: "Eagle Software supports various embedded content formats for Trade Me. For a complete list of supported formats, visit: https://eaglesoftware.help/en/articles/4030064-trade-me-embedded-content-supported-formats",
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
    question: "What Trade Me embedded content formats are supported?",
    response: "Eagle Software supports a range of embedded content formats for Trade Me. For a full list, see: https://eaglesoftware.help/en/articles/4030064-trade-me-embedded-content-supported-formats",
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
  }

];