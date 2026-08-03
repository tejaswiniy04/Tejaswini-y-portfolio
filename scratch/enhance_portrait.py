import os
from PIL import Image, ImageEnhance, ImageFilter

input_path = r"d:\Portfolio_Teju\public\tejaswini.png"
output_png = r"d:\Portfolio_Teju\public\tejaswini.png"
output_jpg = r"d:\Portfolio_Teju\public\tejaswini.jpg"

print(f"Loading {input_path}...")
img = Image.open(input_path).convert("RGBA")

# 1. Unsharp Mask Filter for sharp edge details
enhanced = img.filter(ImageFilter.UnsharpMask(radius=1.8, percent=140, threshold=2))

# 2. Enhance Sharpness
sharpness_enhancer = ImageEnhance.Sharpness(enhanced)
enhanced = sharpness_enhancer.enhance(1.6)

# 3. Enhance Contrast
contrast_enhancer = ImageEnhance.Contrast(enhanced)
enhanced = contrast_enhancer.enhance(1.12)

# 4. Enhance Color Vibrancy
color_enhancer = ImageEnhance.Color(enhanced)
enhanced = color_enhancer.enhance(1.10)

# 5. Brightness adjustment for clear illumination
brightness_enhancer = ImageEnhance.Brightness(enhanced)
enhanced = brightness_enhancer.enhance(1.04)

# Save PNG with alpha
enhanced.save(output_png, "PNG")
print(f"Successfully saved enhanced PNG to {output_png}")

# Save JPG version with dark background
background = Image.new("RGB", enhanced.size, (7, 5, 6))
background.paste(enhanced, mask=enhanced.split()[3])
background.save(output_jpg, "JPEG", quality=95)
print(f"Successfully saved enhanced JPG to {output_jpg}")
