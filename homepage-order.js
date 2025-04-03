
// Updated Service Configuration with File Upload Option
const services = {
  "Guest Posting": {
    packages: [
      {
        name: "Starter",
        price: "$50",
        features: [
          "DA 30-40 sites",
          "1 guest post",
          "500-word article",
          "1 dofollow link",
          "7-10 day turnaround"
        ],
        value: "guest_starter"
      },
      {
        name: "Professional",
        price: "$120",
        features: [
          "DA 40-50 sites",
          "2 guest posts",
          "800-word articles",
          "2 dofollow links",
          "Priority placement"
        ],
        value: "guest_pro"
      },
      {
        name: "Premium",
        price: "$250",
        features: [
          "DA 50+ sites only",
          "3 guest posts",
          "1000-word premium content",
          "3 dofollow links",
          "3-5 day turnaround",
          "Featured placement"
        ],
        value: "guest_premium"
      }
    ],
    fields: `
      <div class="mb-4">
        <div class="alert alert-info">
          <h5><i class="bi bi-info-circle-fill me-2"></i>Recommended Information</h5>
          <p class="mb-1">For best results with your guest post, we recommend providing:</p>
          <ol class="mb-0">
            <li>Target URL (your website page to link to)</li>
            <li>Desired Anchor Text (exact text to hyperlink)</li>
            <li>Desired Article Topic (what the post should be about)</li>
            <li>Niche/Industry (to match with relevant sites)</li>
          </ol>
        </div>

        <h6 class="fw-bold mb-3 text-primary">Link Details</h6>
        <div class="mb-3">
          <label for="targetUrl" class="form-label">Target Page URL</label>
          <input type="url" class="form-control" id="targetUrl" name="targetUrl" 
                 placeholder="https://www.yourwebsite.com/relevant-page">
          <small class="text-muted">The page on your site you want to link to (optional)</small>
        </div>
        <div class="mb-3">
          <label for="anchorText" class="form-label">Anchor Text</label>
          <input type="text" class="form-control" id="anchorText" name="anchorText" 
                 placeholder="e.g., 'best SEO tools'">
          <small class="text-muted">Exact text that will be hyperlinked (optional)</small>
        </div>
        <div class="mb-3">
          <label for="articleTopic" class="form-label">Article Topic</label>
          <textarea class="form-control" id="articleTopic" name="articleTopic" rows="2"
                    placeholder="e.g., '10 Best SEO Tools for Small Businesses in 2024'"></textarea>
          <small class="text-muted">What the guest post should be about (optional)</small>
        </div>
        <div class="mb-3">
          <label for="niche" class="form-label">Niche/Industry</label>
          <input type="text" class="form-control" id="niche" name="niche" 
                 placeholder="e.g., 'Digital Marketing', 'Health & Wellness'">
          <small class="text-muted">To match with relevant websites (optional)</small>
        </div>
        
        <h6 class="fw-bold mb-3 text-primary">Content Options</h6>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="contentOption" id="contentOptionWrite" value="write" checked>
            <label class="form-check-label" for="contentOptionWrite">
              We will write the article for you
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="contentOption" id="contentOptionProvide" value="provide">
            <label class="form-check-label" for="contentOptionProvide">
              I will provide the article
            </label>
          </div>
        </div>
        
        <div class="mb-3" id="articleUploadSection" style="display: none;">
          <div class="mb-3">
            <label class="form-label">How would you like to provide your article?</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="articleDeliveryMethod" id="articleLinkMethod" value="link" checked>
              <label class="form-check-label" for="articleLinkMethod">
                Paste a link (Google Docs, Dropbox, etc.)
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="articleDeliveryMethod" id="articleUploadMethod" value="upload">
              <label class="form-check-label" for="articleUploadMethod">
                Upload a file
              </label>
            </div>
          </div>
          
          <div id="articleLinkSection">
            <label for="articleLink" class="form-label">Article Link</label>
            <input type="url" class="form-control" id="articleLink" name="articleLink" 
                   placeholder="https://docs.google.com/document/d/...">
            <small class="text-muted">Please provide a shareable link to your article</small>
          </div>
          
          <div id="articleFileSection" style="display: none;">
            <label for="articleFile" class="form-label">Upload Article File</label>
            <input type="file" class="form-control" id="articleFile" name="articleFile" 
                   accept=".doc,.docx,.pdf,.txt,.rtf">
            <small class="text-muted">Accepted formats: DOC, DOCX, PDF, TXT, RTF (max 5MB)</small>
          </div>
        </div>
      </div>
    `
  },
  "Niche Edits": {
    packages: [
      {
        name: "Basic",
        price: "$75",
        features: [
          "DA 30-40 sites",
          "1 niche edit",
          "Contextual placement",
          "7-14 day turnaround"
        ],
        value: "niche_basic"
      },
      {
        name: "Premium",
        price: "$150",
        features: [
          "DA 40-60 sites",
          "2 niche edits",
          "Editor-approved placement",
          "5-7 day turnaround"
        ],
        value: "niche_premium"
      },
      {
        name: "VIP",
        price: "$300",
        features: [
          "DA 60+ sites only",
          "3 niche edits",
          "Featured placement",
          "72-hour turnaround",
          "Traffic >10K/month"
        ],
        value: "niche_vip"
      }
    ],
    fields: `
      <div class="mb-4">
        <div class="alert alert-info">
          <h5><i class="bi bi-info-circle-fill me-2"></i>Recommended Information</h5>
          <p class="mb-1">For best results with your niche edit, we recommend providing:</p>
          <ol class="mb-0">
            <li>Target URL (your website page to link to)</li>
            <li>Desired Anchor Text (exact text to hyperlink)</li>
            <li>Placement preference in existing article</li>
          </ol>
        </div>

        <h6 class="fw-bold mb-3 text-primary">Link Details</h6>
        <div class="mb-3">
          <label for="targetUrl" class="form-label">Target Page URL</label>
          <input type="url" class="form-control" id="targetUrl" name="targetUrl"
                 placeholder="https://www.yourwebsite.com/relevant-page">
        </div>
        <div class="mb-3">
          <label for="anchorText" class="form-label">Anchor Text</label>
          <input type="text" class="form-control" id="anchorText" name="anchorText"
                 placeholder="e.g., 'best SEO tools'">
        </div>
        <div class="mb-3">
          <label class="form-label">Placement Preference</label>
          <select class="form-select" name="placementPref">
            <option value="">No preference</option>
            <option value="Anywhere in article">Anywhere in article</option>
            <option value="First paragraph">First paragraph</option>
            <option value="Conclusion section">Conclusion section</option>
          </select>
        </div>
      </div>
    `
  },
  "Press Releases": {
    packages: [
      {
        name: "Standard",
        price: "$150",
        features: [
          "300-word press release",
          "Distribution to 100+ sites",
          "5 dofollow links",
          "Basic analytics"
        ],
        value: "pr_standard"
      },
      {
        name: "Premium",
        price: "$300",
        features: [
          "500-word press release",
          "Distribution to 300+ sites",
          "10 dofollow links",
          "Featured placement",
          "Advanced analytics"
        ],
        value: "pr_premium"
      },
      {
        name: "Enterprise",
        price: "$600",
        features: [
          "800-word premium release",
          "Distribution to 500+ sites",
          "AP-style writing",
          "20+ dofollow links",
          "Priority distribution",
          "Media outreach"
        ],
        value: "pr_enterprise"
      }
    ],
    fields: `
      <div class="mb-4">
        <div class="alert alert-info">
          <h5><i class="bi bi-info-circle-fill me-2"></i>Recommended Information</h5>
          <p class="mb-1">For best results with your press release, we recommend providing:</p>
          <ol class="mb-0">
            <li>Press release headline</li>
            <li>Target publication date</li>
            <li>Key messages and quotes</li>
          </ol>
        </div>

        <h6 class="fw-bold mb-3 text-primary">Press Release Details</h6>
        <div class="mb-3">
          <label for="prHeadline" class="form-label">Headline</label>
          <input type="text" class="form-control" id="prHeadline" name="prHeadline"
                 placeholder="e.g., 'Company X Launches Revolutionary New Product'">
        </div>
        <div class="mb-3">
          <label for="prDate" class="form-label">Target Publication Date</label>
          <input type="date" class="form-control" id="prDate" name="prDate">
        </div>
        <div class="mb-3">
          <label for="prKeywords" class="form-label">Target Keywords</label>
          <input type="text" class="form-control" id="prKeywords" name="prKeywords"
                 placeholder="e.g., 'product launch, innovation, technology'">
        </div>
        
        <h6 class="fw-bold mb-3 text-primary">Content Options</h6>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="prContentOption" id="prContentOptionWrite" value="write" checked>
            <label class="form-check-label" for="prContentOptionWrite">
              We will write the press release for you
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="prContentOption" id="prContentOptionProvide" value="provide">
            <label class="form-check-label" for="prContentOptionProvide">
              I will provide the press release
            </label>
          </div>
        </div>
        <div class="mb-3" id="prUploadSection" style="display: none;">
          <label for="prLink" class="form-label">Press Release Link (Google Docs or PDF)</label>
          <input type="url" class="form-control" id="prLink" name="prLink" 
                 placeholder="https://docs.google.com/document/d/...">
          <small class="text-muted">Please provide a shareable link to your press release</small>
        </div>
      </div>
    `
  },
  "Content Writing": {
    packages: [
      {
        name: "SEO Articles",
        price: "$0.10/word",
        features: [
          "500-1000 words",
          "SEO-optimized",
          "1 revision",
          "5-day turnaround"
        ],
        value: "content_basic"
      },
      {
        name: "Copywriting",
        price: "$0.15/word",
        features: [
          "1000-2000 words",
          "Advanced SEO",
          "2 revisions",
          "Landing pages, emails, ads",
          "Research included",
          "3-day turnaround"
        ],
        value: "content_premium"
      },
      {
        name: "Guest Posts",
        price: "$0.25/word",
        features: [
          "2000+ words",
          "Premium research",
          "Unlimited revisions",
          "Expert writer",
          "48-hour turnaround"
        ],
        value: "content_enterprise"
      }
    ],
    fields: `
      <div class="mb-4">
        <div class="alert alert-info">
          <h5><i class="bi bi-info-circle-fill me-2"></i>Recommended Information</h5>
          <p class="mb-1">For best results with your content, we recommend providing:</p>
          <ol class="mb-0">
            <li>Detailed topic/title</li>
            <li>Target word count</li>
            <li>Key points to cover</li>
            <li>Target audience information</li>
          </ol>
        </div>

        <h6 class="fw-bold mb-3 text-primary">Content Details</h6>
        <div class="mb-3">
          <label for="contentTopic" class="form-label">Topic/Title</label>
          <input type="text" class="form-control" id="contentTopic" name="contentTopic"
                 placeholder="e.g., 'The Complete Guide to SEO in 2024'">
        </div>
        <div class="mb-3">
          <label for="wordCount" class="form-label">Word Count</label>
          <input type="number" class="form-control" id="wordCount" name="wordCount" min="500"
                 placeholder="e.g., 1500">
        </div>
        <div class="mb-3">
          <label for="contentKeywords" class="form-label">Target Keywords</label>
          <input type="text" class="form-control" id="contentKeywords" name="contentKeywords"
                 placeholder="e.g., 'SEO guide, search engine optimization, ranking factors'">
        </div>
        <div class="mb-3">
          <label for="contentNotes" class="form-label">Additional Notes</label>
          <textarea class="form-control" id="contentNotes" name="contentNotes" rows="3"
                    placeholder="Any specific requirements, tone preferences, or key points to include"></textarea>
        </div>
        
        <h6 class="fw-bold mb-3 text-primary">Reference Materials</h6>
        <div class="mb-3">
          <label for="referenceLinks" class="form-label">Reference Links (optional)</label>
          <textarea class="form-control" id="referenceLinks" name="referenceLinks" rows="2"
                    placeholder="Paste any reference links or sources you'd like us to use"></textarea>
        </div>
      </div>
    `
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Set up all order buttons
  document.querySelectorAll('[data-service]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const service = this.getAttribute('data-service');
      initializeOrderModal(service);
    });
  });

  // Set up content option toggles
  document.addEventListener('change', function(e) {
    if (e.target.name === 'contentOption') {
      const uploadSection = document.getElementById('articleUploadSection');
      if (uploadSection) {
        uploadSection.style.display = e.target.value === 'provide' ? 'block' : 'none';
      }
    }
    if (e.target.name === 'articleDeliveryMethod') {
      const linkSection = document.getElementById('articleLinkSection');
      const fileSection = document.getElementById('articleFileSection');
      if (linkSection && fileSection) {
        linkSection.style.display = e.target.value === 'link' ? 'block' : 'none';
        fileSection.style.display = e.target.value === 'upload' ? 'block' : 'none';
      }
    }
    if (e.target.name === 'prContentOption') {
      const uploadSection = document.getElementById('prUploadSection');
      if (uploadSection) {
        uploadSection.style.display = e.target.value === 'provide' ? 'block' : 'none';
      }
    }
  });
});

// Initialize the order modal
function initializeOrderModal(service) {
  // Set service type
  document.getElementById('serviceType').value = service;
  document.getElementById('orderModalLabel').textContent = `Order ${service}`;
  
  // Render packages
  renderPackages(service);
  
  // Render service fields
  renderServiceFields(service);
  
  // Initialize modal
  const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
  orderModal.show();
  
  // Set up package selection
  setupPackageSelection();
}

// Render package options
function renderPackages(service) {
  const container = document.getElementById('packageOptions');
  container.innerHTML = '';
  
  services[service].packages.forEach((pkg, index) => {
    const packageHTML = `
      <div class="col-md-6">
        <div class="card h-100 package-card" 
             onclick="selectPackage(${index})"
             data-package-value="${pkg.value}">
          <div class="card-body">
            <h5 class="card-title">${pkg.name}</h5>
            <h6 class="card-subtitle mb-3 text-primary">${pkg.price}</h6>
            <ul class="list-unstyled small">
              ${pkg.features.map(feat => `<li><i class="bi bi-check-circle text-primary me-2"></i>${feat}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', packageHTML);
  });
}

// Render service-specific fields
function renderServiceFields(service) {
  const container = document.getElementById('serviceSpecificFields');
  container.innerHTML = services[service].fields || '';
}

// Handle package selection
function selectPackage(index) {
  const serviceType = document.getElementById('serviceType').value;
  const selectedPackage = services[serviceType].packages[index];
  
  // Create or update hidden input for package value
  let packageInput = document.querySelector('input[name="package"]');
  if (!packageInput) {
    packageInput = document.createElement('input');
    packageInput.type = 'hidden';
    packageInput.name = 'package';
    document.getElementById('orderForm').appendChild(packageInput);
  }
  packageInput.value = selectedPackage.value;
  
  // Update UI
  document.querySelectorAll('.package-card').forEach(card => {
    card.classList.remove('selected');
  });
  document.querySelectorAll('.package-card')[index].classList.add('selected');
  
  // Hide guidance after selection
  document.getElementById('packageGuidance').style.display = 'none';
}

// Set up package selection events
function setupPackageSelection() {
  document.querySelectorAll('.package-card').forEach((card, index) => {
    card.addEventListener('click', () => selectPackage(index));
  });
}

// Updated Form Submission Handler with File Upload and Email Redirection
async function submitOrder(event) {
  event.preventDefault();
  
  const form = document.getElementById('orderForm');
  const serviceType = document.getElementById('serviceType').value;
  
  // Required fields validation
  const requiredFields = ['customerName', 'customerEmail', 'package'];
  for (const field of requiredFields) {
    if (!form.elements[field]?.value) {
      alert(`Please fill in the ${field} field`);
      return;
    }
  }

  // File upload handling
  const fileInput = document.getElementById('articleFile');
  let uploadedFileUrl = null;
  
  if (fileInput && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    
    // File validation
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'application/rtf'
    ];
    
    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5MB limit');
      return;
    }
    
    // Check file type
    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid file type (PDF, DOC, DOCX, TXT, or RTF)');
      return;
    }
    
    // Upload file (simulated - implement your actual upload logic)
    try {
      const uploadResponse = await uploadFile(file);
      if (!uploadResponse.success) {
        alert('Error uploading file. Please try again or use the link option.');
        return;
      }
      uploadedFileUrl = uploadResponse.url;
    } catch (error) {
      console.error('File upload error:', error);
      alert('Error uploading file. Please try again or use the link option.');
      return;
    }
  }

  // Prepare form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.timestamp = new Date().toISOString();
  
  // Add file URL if uploaded
  if (uploadedFileUrl) {
    data.uploadedFileUrl = uploadedFileUrl;
  }

  // Get selected package details
  const selectedPackage = services[serviceType].packages.find(
    pkg => pkg.value === data.package
  );
  
  const submitButton = event.target;
  submitButton.disabled = true;
  submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';
  
  try {
    // Submit to Google Sheets (optional)
    await submitToGoogleSheets({...data, packageDetails: selectedPackage});
    
    if (event.target.id === 'submitWhatsAppBtn') {
      redirectToWhatsApp(data, serviceType, selectedPackage);
    } else {
      redirectToEmail(data, serviceType, selectedPackage);
    }
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
    modal.hide();
    showThankYouMessage();
  } catch (error) {
    console.error('Submission error:', error);
    alert('Error submitting order. Please try again or contact us.');
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = event.target.id === 'submitWhatsAppBtn' 
      ? '<i class="bi bi-whatsapp me-2"></i> Submit via WhatsApp'
      : '<i class="bi bi-envelope me-2"></i> Submit via Email';
  }
}

// Email redirection function
function redirectToEmail(data, serviceType, packageDetails) {
  const email = 'your-email@example.com'; // REPLACE WITH YOUR EMAIL
  const subject = `New Order Request: ${serviceType} - ${packageDetails.name}`;
  
  let body = `New Order Request\n\n`;
  body += `Service: ${serviceType}\n`;
  body += `Package: ${packageDetails.name} (${packageDetails.price || 'Custom'})\n\n`;
  body += `Customer Details\n`;
  body += `Name: ${data.customerName}\n`;
  body += `Email: ${data.customerEmail}\n`;
  body += `WhatsApp: ${data.customerWhatsApp || 'Not provided'}\n\n`;
  
  // Service-specific details
  if (serviceType === 'Guest Posting') {
    body += `Guest Post Details\n`;
    if (data.targetUrl) body += `Target URL: ${data.targetUrl}\n`;
    if (data.anchorText) body += `Anchor Text: ${data.anchorText}\n`;
    if (data.articleTopic) body += `Article Topic: ${data.articleTopic}\n`;
    if (data.niche) body += `Niche/Industry: ${data.niche}\n`;
    body += `Content Option: ${data.contentOption === 'write' ? 'We will write' : 'Client will provide'}\n`;
    if (data.contentOption === 'provide') {
      if (data.articleLink) body += `Article Link: ${data.articleLink}\n`;
      if (data.uploadedFileUrl) body += `Uploaded File URL: ${data.uploadedFileUrl}\n`;
    }
  } 
  else if (serviceType === 'Niche Edits') {
    body += `Niche Edit Details\n`;
    if (data.targetUrl) body += `Target URL: ${data.targetUrl}\n`;
    if (data.anchorText) body += `Anchor Text: ${data.anchorText}\n`;
    if (data.placementPref) body += `Placement Preference: ${data.placementPref}\n`;
  }
  else if (serviceType === 'Press Releases') {
    body += `Press Release Details\n`;
    if (data.prHeadline) body += `Headline: ${data.prHeadline}\n`;
    if (data.prDate) body += `Target Date: ${data.prDate}\n`;
    if (data.prKeywords) body += `Keywords: ${data.prKeywords}\n`;
    body += `Content Option: ${data.prContentOption === 'write' ? 'We will write' : 'Client will provide'}\n`;
    if (data.prContentOption === 'provide' && data.prLink) body += `Press Release Link: ${data.prLink}\n`;
  }
  else if (serviceType === 'Content Writing') {
    body += `Content Writing Details\n`;
    if (data.contentTopic) body += `Topic: ${data.contentTopic}\n`;
    if (data.wordCount) body += `Word Count: ${data.wordCount}\n`;
    if (data.contentKeywords) body += `Keywords: ${data.contentKeywords}\n`;
    if (data.contentNotes) body += `Notes: ${data.contentNotes}\n`;
    if (data.referenceLinks) body += `Reference Links: ${data.referenceLinks}\n`;
  }
  
  body += `\nPackage Features:\n${packageDetails.features?.join('\n') || 'Custom package'}`;
  
  // Encode the subject and body for URL
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  
  // Open default email client
  window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

// WhatsApp redirection function
function redirectToWhatsApp(data, serviceType, packageDetails) {
  const phone = '1234567890'; // REPLACE WITH YOUR WHATSAPP NUMBER
  let message = `*New Order Request*\n\n`;
  message += `*Service:* ${serviceType}\n`;
  message += `*Package:* ${packageDetails.name} (${packageDetails.price || 'Custom'})\n\n`;
  message += `*Customer Details*\n`;
  message += `Name: ${data.customerName}\n`;
  message += `Email: ${data.customerEmail}\n`;
  message += `WhatsApp: ${data.customerWhatsApp || 'Not provided'}\n\n`;
  
  // Service-specific details
  if (serviceType === 'Guest Posting') {
    message += `*Guest Post Details*\n`;
    if (data.targetUrl) message += `Target URL: ${data.targetUrl}\n`;
    if (data.anchorText) message += `Anchor Text: ${data.anchorText}\n`;
    if (data.articleTopic) message += `Article Topic: ${data.articleTopic}\n`;
    if (data.niche) message += `Niche/Industry: ${data.niche}\n`;
    message += `Content Option: ${data.contentOption === 'write' ? 'We will write' : 'Client will provide'}\n`;
    if (data.contentOption === 'provide') {
      if (data.articleLink) message += `Article Link: ${data.articleLink}\n`;
      if (data.uploadedFileUrl) message += `Uploaded File URL: ${data.uploadedFileUrl}\n`;
    }
  } 
  // ... (other service types as before)
  
  message += `\n*Package Features:*\n• ${packageDetails.features?.join('\n• ') || 'Custom package'}`;
  
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}

// Simulated file upload function - implement your actual upload logic
async function uploadFile(file) {
  // In a real implementation, you would upload the file to your server here
  // and return the URL where it's stored
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        url: 'https://example.com/uploads/' + file.name
      });
    }, 1000);
  });
}

// Google Sheets Integration
const scriptURL = 'https://script.google.com/macros/s/AKfycbzx84WKmUMLUMyoEFfoc3DOANtlSU4ZrGvYd-qlnZkyOlu8bSv_LOUKBY0fVsze5tOo/exec';
    
async function submitToGoogleSheets(data) {
  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}

function showThankYouMessage() {
  const toastHTML = `
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-success text-white">
          <strong class="me-auto">Thank You!</strong>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Your order has been submitted successfully. We'll contact you shortly!
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', toastHTML);
  setTimeout(() => {
    document.querySelector('.toast')?.remove();
  }, 5000);
}

// Event listeners
document.getElementById('submitEmailBtn')?.addEventListener('click', submitOrder);
document.getElementById('submitWhatsAppBtn')?.addEventListener('click', submitOrder);
