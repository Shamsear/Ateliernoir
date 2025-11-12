# Image Guide for ATELIER NOIR Website

## How to Add Your Own Images

### Option 1: Use Local Images

1. **Create an images folder:**
   - Create a folder named `images` in the same directory as `index.html`
   - Place your fashion photos in this folder

2. **Recommended image names:**
   - `hero1.jpg` - Main hero image
   - `hero2.jpg` - Secondary hero image
   - `hero3.jpg` - Tertiary hero image
   - `collection1.jpg` - Luxe Modesty collection
   - `collection2.jpg` - Desert Rose collection
   - `collection3.jpg` - Abaya Couture collection
   - `collection4.jpg` - Evening Elegance collection

3. **Update the HTML:**
   Replace gradient backgrounds with:
   ```html
   style="background: url('images/hero1.jpg') center/cover;"
   ```

### Option 2: Use Online Images

Replace gradient backgrounds in `index.html` with image URLs:

**For Hero Section (lines 44-46):**
```html
<div class="stack-item" style="background: url('YOUR_IMAGE_URL') center/cover;"></div>
```

**For Collections (lines 78, 88, 98, 108):**
```html
<div class="collection-bg" style="background: url('YOUR_IMAGE_URL') center/cover;"></div>
```

## Image Specifications

### Hero Images:
- **Dimensions:** 800x1000px minimum
- **Aspect Ratio:** Portrait (4:5 or 3:4)
- **Format:** JPG or PNG
- **Content:** Elegant modest fashion, luxury wear

### Collection Images:
- **Dimensions:** 1200x1200px minimum
- **Aspect Ratio:** Any (will be cropped)
- **Format:** JPG or PNG
- **Content:** 
  - Collection 1: Sophisticated modest wear
  - Collection 2: Desert-inspired designs
  - Collection 3: Luxury abayas
  - Collection 4: Evening gowns

## Free Image Resources

You can find suitable images from:
- **Unsplash** - https://unsplash.com/s/photos/modest-fashion
- **Pexels** - https://www.pexels.com/search/elegant-fashion/
- **Pixabay** - https://pixabay.com/images/search/fashion/

## Example HTML for Local Images

```html
<!-- Hero Section -->
<div class="stack-item" style="background: url('images/hero1.jpg') center/cover;"></div>

<!-- Collection -->
<div class="collection-bg" style="background: url('images/collection1.jpg') center/cover;"></div>
```

## Tips

- Use high-quality, professional photos
- Ensure images are optimized for web (under 500KB each)
- Choose images with good contrast for text overlay
- Test on mobile devices for proper display
- Consider cultural appropriateness for UAE market
