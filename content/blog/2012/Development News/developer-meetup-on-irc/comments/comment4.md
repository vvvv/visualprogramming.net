---
user: "elliotwoods"
created: "1336473083"
---

Hey all

So sorry I missed this!
Helping out KE4 at the world expo in Yeosu (for a bit longer than expected).
Sorry to not send my apologies in advance!
Ok ok.. 

Thanks for posting the log here joreg!
makes me wish i was there even more

A few quick points I'd have probably made:

###  HTML/PPT rendering
Sounds great.

###  Visual diff
I imagine this as a version select mode which works on the git repo.
The patch is not evaluating
You have a slider between versions, moving the slider shows you the patch windows.
Nodes 'damp' between positions as you select commits in the slider
You hit 'check out' button on slider window to check out that version, evaluation starts again
This could either be inside vvvv, or a script / patch that generates this as HTML

The important thing for me is nodes and connections. I can generally imagine / remember the result if I can see that.
A special git diff with xslt or something to strip out visual data maybe? (e.g. Left, top)

###  Filtering nodes
This idea tallies with 'not all addons belong in the vvvv-SDK'
(and is separate from big but important addons perhaps being outside of vvvv SDK)

###  Core nodes rewrite
@gregsn : your proposal is exactly what we choose to go with for OpenCV.
Please check a simple example at 
<https://github.com/smakhtin/VVVV.Nodes.Image/blob/master/OpenCV/src/Filters/S%2BH.cs>
( we're doing a lot more in the abstract base class to deal with threading, creation, destruction, etc)

The addition of pin attributes / reflection would be magic so we don't have to pass in/out data manually


I'd really like an open source rendering engine (e.g. Dx11, OpenGL) so we can edit the core graphics nodes ourselves (renderer, etc).


###  GPL license
So did we agree to switch to MIT?

###  GitHub repo problems
Apologies @alg for subrepo issues!
And for not being there to give support with this discussion.
I found lots of problems working with the main repo (lots of files end up being 'modified' or 'untracked' which either should be ignored or shouldn't be modified at all, and then weaning these out is totally unnecessary / wastes time / isn't what I want to be doing).
I have noticed that the repo is definitely getting more healthy, and i'd like to move vvvv.nodes.image back into there at some point.

I find the single biggest plus for the repo at the moment is reliability of co-dependencies.
It's so big in fact that I'm having trouble arguing against it.

Ack. This iPad is out of battery
Will be back later for more! :)

