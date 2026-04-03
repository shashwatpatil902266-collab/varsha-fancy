import re
import os

# fix the data.js specifically
with open('js/data.js', 'r') as f:
    text = f.read()

# completely replace any lingering saree or gold items to cosmetics and delete tags
text = re.sub(r'assets/products/saree\.png', 'assets/products/cosmetics.png', text)
text = re.sub(r'assets/categories/saree_hero\.png', 'assets/products/cosmetics.png', text)
text = text.replace('Gujarati Print', 'Organic Scrub')
text = text.replace('saree", "bandhani"', 'scrub", "organic"')
text = text.replace('saree', 'scrub/cosmetics')
text = text.replace('The scrub/cosmetics is absolutely gorgeous!', 'The cosmetics kit is absolutely gorgeous!')
text = text.replace('Beautiful scrub/cosmetics, fast delivery.', 'Beautiful makeup kit, fast delivery.')

with open('js/data.js', 'w') as f:
    f.write(text)

# Let's fix index.html
with open('index.html', 'r') as f:
    text = f.read()
text = re.sub(r'assets/categories/saree_hero\.png', 'assets/categories/cosmetics_hero.png', text)
with open('index.html', 'w') as f:
    f.write(text)

# In components.js, did I break category links?
# earlier I changed "sarees" to "cosmetics". So "?cat=cosmetics" "Luxury Cosmetics"
# Is there an issue with clicking them? Let's check products.js for click listeners.
# "few buttons are not working" -> maybe "Add to Cart" button from the Modal?
# Wait! In `openAccountModal`, is it missing a button listener?
# The modal has a close button `<button class="modal-close" onclick="closeAccountModal()">&times;</button>`
# BUT DOES `closeAccountModal()` exist?
