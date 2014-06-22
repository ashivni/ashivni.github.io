import scipy
import numpy
import pylab


blocks = ['bio','criticalP','cv','evs','graphene','hea','index','mit','publications','research','statisticalF','languages']
blocks.extend(['blog1', 'blog2'])

# Process the blocks

for block in blocks:
	bFile = open('block_'+block+'.html','r')
	tFile = open('template.html','r')
	if block == 'index':
		outFile = open('../'+block+'.html','w+')
	else:
		outFile = open('../pages/'+block+'.html','w+')
		

	for tl in tFile.readlines():
		if len(tl.split())>0 and tl.split()[0] == 'BLOCK':
			for bl in bFile:
				outFile.write(bl)
		else:
			outFile.write(tl)

	bFile.close()
	tFile.close()
	outFile.close()

# Process Language Files
# List of words
words = []
files=[]
words.extend(['banana','chicken','egg','ghee','lentil','meal','milk','oil','rice','salt','sugar'])
files.extend(['Banana','Chicken','Egg','Ghee','Lentil','Meal','Milk','Oil','Rice','Salt','Sugar'])

words.extend(['cheeks', 'chest', 'ears', 'fingers', 'toes', 		'forehead', 'hair', 'hands', 'knee', 'legs', 'lips', 'Nails', 'nose', 'stomach', 'teeth'])
files.extend(['Cheeks', 'Chest', 'Ears', 'Fingers', 'Fingers', 	'Forehead', 'Hair', 'Hands', 'Knee', 'Legs', 'Lips', 'Nails', 'Nose', 'Stomach', 'Teeth'])

# Make sure capitalize
for i in range(len(words)):
	words[i] = words[i].capitalize()
	files[i] = files[i].lower()

# Sort
words, files = (list(t) for t in zip(*sorted(zip(words,files))))

# Generate the malayalam.html file
f=open('../langs/malayalam.html','w+')

tFile = open('template.html','r')
for tl in tFile.readlines():
	if len(tl.split())>0 and tl.split()[0] == 'BLOCK':
		f.write('\t<div>\n\t\t<label for="tags">Search: </label>\n')
		f.write('\t\t<input id="tags" onclick="malayInputs()"</input>\n')
		f.write('\t\t<button onclick="malayLoad()">Submit</button>\n')
		f.write('\t\t<br><br>\n')

		f.write('\t\t<audio id="player" controls="controls">\n')
		f.write('\t\t\t<source id="mp3src" src="" type="audio/mpeg">\n')
		f.write('\t\t\t<source id="oggsrc" src="" type="audio/ogg">\n')
		f.write('\t\t\t<embed id="embedsrc" height="50" width="100" src="">\n')
		f.write('\t\t\tYour browser does not support html5 audio.\n');
		f.write('\t\t</audio>\n')
		f.write('\t</div>\n')
		f.write('\t<br><br>\n')

		f.write('\t<div>\n')
		f.write('\t\t<h3> Click on words for sound. Html5 audio support needed. </h3>\n')
		for w, fN in zip(words,files):
			f.write('\t\t<a class="soundBite" onclick="createsoundbite(\'/langs/malayRecords/%s.mp3\',\'/langs/malayRecords/%s.ogg\').playclip()">%s</a><br>\n'%(fN,fN,w))

		f.write('\t</div>\n')
	else:
		f.write(tl)
f.close()

# malayalam.js
f=open('../js/malayalam.js','w+')

f.write('var availableText = [];\n') 
for i in range(len(words)):
	f.write('availableText[%d] = ["%s","%s"];\n'%(i,words[i].capitalize(),files[i]))

f.write('\n')

# Copy rest of the file
fCp=open('../js/malayalamFoot.js','r')

for l in fCp.readlines():
	f.write(l)

fCp.close()
f.close()
