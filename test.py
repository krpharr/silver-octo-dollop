import sys
from music21 import *

s = corpus.parse('bach/bwv65.2.xml')
s.show('text')
print(s)
sys.stdout.flush()