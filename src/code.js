export const code = `
#!/bin/bash
#[
  echo Phix ignores all text between #[ and #] in exactly the same way as /* and */ 
  echo (both "and" are nested comments), allowing arbitrary shell code, for example:
  cd /user/project/working
  exec /path/to/phix "$0" "$@"
  exit # may be needed for the shell to ignore the rest of this file.
# comments(/shebang) ignored by Phix end here -> #]
-- aside: few files have [multiline] shebangs like above, but this *is* a test file.
/*  
    Standard
    /*
    **  Nested
    **  /*
    **      Block
    *//*    /*
    **          Comments, of which Phix has quite a few [ok, six] varieties...
    **      */
    *****/
    **/
*/
--/*
    Euphoria-compatibility-style nestable multiline comments/code
--*/
// This program should be runnable (C-style line comments, btw, too!)
with javascript_semantics
string pe, te := iff(platform()==JS?"JavaScript/browser":"Phix/desktop")
ifdef PHIX then 
    pe = "Phix" 
elsedef 
    pe = "Euphoria" -- not that this file is compatible with that..
end ifdef 
printf(1,"This is %s (%s)\n",{pe,te}); -- the ; is entirely optional
assert("\n\r\b\t\\\"\'\0\e"=join({"",10,13,8,9,#5C,#22,#27,#00,#1B},""))
assert("\#42\x43\u4445\U00105678"="B"&'C'&"\xE4\x91\x85\xF4\x85\x99\xB8")

-- triplequote, triplequote indented, backtick, and doublequote strings:
constant tqs = """
this
string\thing""",

tqis = """
_____this
     string\thing""",

bts = `+`this
string\thing`+`,

dqs = "this\nstring\\thing"
assert(tqs==tqis and tqis==bts and bts==dqs and dqs==tqs)
assert(x"1 2 34 5678_AbC"=={0x01, 0x02, 0x34, 0x56, 0x78, 0xAB, 0x0C})

-- Beyond comments and strings, not much in Phix bothers a syntax colourer.
-- Originally I had another 380+ lines in here, that didn't prove anything.

function merge_sort(sequence x)
    -- put x into ascending order using a recursive merge sort
     if length(x)<=1 then
         return x  -- trivial case
     end if
     integer midpoint = floor(length(x)/2)
     sequence merged = {},
          first_half = merge_sort(x[1..midpoint]),
         second_half = merge_sort(x[midpoint+1..$])
     -- merge the two sorted halves into one
     while length(first_half)>0 
       and length(second_half)>0 do
         if first_half[1]<=second_half[1] then
             merged = append(merged, first_half[1])
             first_half = first_half[2..$]
         else
             merged = append(merged, second_half[1])
             second_half = second_half[2..$]
         end if
     end while
     -- result is the merged data plus any leftovers
     return merged & first_half & second_half
end function

?merge_sort({9, 10, 3, 1, 4, 5, 8, 7, 6, 2})
?{1,0(2)10,0b11,0d4,0t5,0(6)10,0(7)10,0o10,0x9,#A} -- [the same 1..10 but with extra weirdness]

wait_key()
`

export const htmlScript = `<!-- You can simply add phix.js as a script tag: -->
<script src="js/codemirror.js"></script>
<script src="js/codemirror-mode-phix/dist/phix.js"></script>`

export const jsImport = `// If you're using frontend build tools like Webpack and Babel,
// you can simply import the module and register the mode:
import CodeMirror from 'codemirror'
import 'codemirror-mode-phix'`

export const create = `CodeMirror.fromTextArea(document.getElementById('code'), { mode: 'phix' })`
