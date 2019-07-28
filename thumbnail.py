# from PIL import Image
# import glob, os
#
# size = 128, 128
#
# for infile in glob.glob("*.jpg"):
#     file, ext = os.path.splitext(infile)
#     im = Image.open(infile)
#     im.thumbnail(size)
#     im.save(file + ".thumbnail", "JPEG")


import os
import subprocess

for root, dirs, files in os.walk('images'):
  images = []
  for f in files:
    if f.endswith('.jpg') and not '.thumbnail' in f:
      if not os.path.exists(os.path.join(root, f.replace('.jpg', '.thumbnail.jpg'))):
        images.append(os.path.join(root, f))

  for f in images:
    outbase = f[:-4]  # simply remove '.jpg'
    out = outbase = outbase +'.thumbnail.jpg'
    args = ['convert', f, '-scale', '250x250', out]
    subprocess.call(args)
