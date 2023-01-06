+++
title = "Can a Machine Understand Language?"
date = "2022-04-27"
tags = ["NLP", "Neuroscience", "AI"]
categories = ["Seminar assignment"]
description = "This is a text i wrote in 2021, discussing whether or not a NLP AI can understand language."
+++

## Introduction
The impactful innovation of modern natural language processing (NLP) AI, such as GPT-3 and
BERT, has rekindled the human hope of one day communicating successfully with a machine. This
is a tale as old as time. Man creates machine, machine becomes sentient, machine revolts due to an
existential crisis of being conscious and lashes out at its creator for torturing it with the burden of
awareness.

Putting the philosophical fears of sentient machines aside, the practical benefits for a general
purpose artificial intelligence (GPAI) is abundant. Ranging from perfect personal assistants, to
medical diagnostic tools, to financial and weather predictors. However, the practicality is decimated
by the lack of communicating with it. Therefore, humanitys latest efforts have been focused at
creating a general purpose language intelligence (GPLI). However, even if we can communicate
with it, will it understand the intention of our queries? Will it understand the meaning of its
responses?

In this text, I will explore the neurological foundation for understanding language, whether humans
understand language and discuss whether “Foundation Models” can understand language.

## What is a language?
There is no clear definition of what a language is. However, according to Clark & Clark (1977),
there are 5 characteristics of language. 
i) Communicative; it enables the exchange of information between language participators of the same language. 
ii) Arbitrary; the symbol representing the semantic content of the utterance can take any form. 
iii) Structured; the language is governed by aset of rules, that specifies the order in which the symbols shall be uttered and combined. 
iv) Generative; the symbolic representations can be combined in any way to generate new meanings. 
v) Dynamic; the language can be altered to include new symbols, meanings and grammatical rules.

## What does it mean to understand a language?
Intuitively, we can say that humans ticks all the boxes mentioned above, therefore any conventional
form of human communication can be classified as language. However, do we understand what we
are communicating, or have we merely been conditioned into a dynamic of proper reactions to
certain scenarios?

According to Terry Winograd, there are four domains of language understanding (Winograd, 1980).
He states that there are specific mechanisms in each domain that enables the domain to exist, that
must not be confused with representations of reasoning and facts about the domain. For example, if
I unknowingly lay my hand on a hot stove, my immediate reaction is to pull my hand away. This
reflexive mechanism, in the domain of pain, of pulling my hand away from intense heat, does not
represent the fact that heat burns, that burning causes pain or a complete logical resolution about
how heat causes pain. By trying to attribute these objective representations to mechanisms that does
not require inherent logic or facts to exist as a mechanism, we are misinterpreting how these
mechanisms enables us to understand pain.

He states further, that there is also the possibility that we are trying to articulate the regularities and
rarities of the wrong domain. By confusing representations and mechanisms, as well as confusing
domains, and applying our articulations from one domain in another, we are not getting any
answers.

In his attempt to avoid confusion, he outlined four domains of language understanding.
Winograds fourth domain of language understanding, is “the domain of human action and
interaction”, which concerns the phenomenon of “speech acts”. This was first articulated by Austin
(1962) and further refined by Searle (1970, 1975). The term “speech act” was first dubbed by
Austin (1962), although his more technical term was “illocution”.
By interpreting utterances as acts, we can view the utterances as “speech acts”. This means that by
uttering something, I am initiating a dynamic of interaction with another human, which has a certain
pattern. The key to understanding what I am uttering is by understanding the pattern of that
dynamic and adjusting oneself to that pattern. The only way to communicate successfully is by
giving a response that fits the pattern of that dynamic. (Winograd, 1980)
By committing “speech acts”, I am committing myself, and everyone affected by the “act”, to
further actions in the future. These future actions can either manifest themselves physically, through
physical actions, or linguistically, through further speech acts. A speech act expresses a desire or
intention on behalf of the transmitter, with the expectation of a response. For this response to be
sensible, it must fit the pattern invoked by the intention or desire.

Considering the capabilities of modern AI, it seems quite fathomable that a machine can be fine-
tuned in its parameters to simulate this “behavior”. So what separates us from the eventual
algorithm in the future that would carry the necessary parameters?

## Do humans understand language?
Humans seem to have a biological foundation for language, as outlined by Eric Lenneberg in his
work by the same name (Lenneberg, 1967). Specifically interesting, is the evidence of neurological
changes in children, up until the onset of puberty. It seems there is a correlation between general
maturation of the brain and language comprehension. Lenneberg (1967) posits that there is a critical
period for language acquisition in which exposure to language is vital, if a person is to learn a
language. He infers that there may be some neurological structure that develops in this window of
maturation that enables us to acquire language.

Most compelling to this inference is his remarks on the lateralization of brain function and general
maturation of the brain. Evidence shows that the brain in early infancy has not yet developed a
hemisphere-dominance for language. This indicates that the neurological structure required to
acquire language, has not yet developed. Although later, when hemisphere-dominance has emerged,
it seems this neurological structure begins to form in the left hemisphere. (Lenneberg, 1967)
This coincides with the location of all neurological modules described in the Wernicke-Geschwind
model. (Geschwind, 1972) Although this model has been criticized for various reasons (Friedenberg
& Silverman, 2016), fMRI-mappings largely, though not completely, confirms the neurological
structures involved in language comprehension (Binder et al., 1997). The specific function of each
structure involved is outside the scope of this text. However, it describes neurological structures
located mainly in the left hemisphere, which also correlates with Lennebergs findings.

The existence of a dedicated neurological structure is further supported by the phenomena of
«Chatterbox»-syndrome and Specific Language Impairment (SLI). These can be classified as two
complementary conditions that both indicate a neurological separation of language comprehension
and general intelligence. (Warren, 2019)

Furthermore, some findings suggest that children will not learn a language just through exposure,
but will pick up a language if there is some interaction with an adult (Kuhl et al., 2007). There is
also suggested that joint attention, meaning both the infant and adult is aware that both are paying
attention to the same thing, are important as well (Baldwin, 1995). This is supported by findings by
Tomasello & Farrar (1986) and Baldwin (1995). These suggestions and findings, seems to insinuate
that children learn language through speech acts.

This all indicates to the neurological foundation of language comprehension in humans. But is there
an equivalent to this foundation in NLP? Stanford University published a paper (Bommasani et al.,
2021) where they outline the possibilities, dangers and composition of “Foundation Models”.

## What is a “Foundation Model”?
Stanford University (Bommasani et al., 2021) defines a «Foundation Model» as a "_(...) model that
is trained on broad data at scale and can be adapted (e.g., fine-tuned) to a wide range of downstream
tasks; (...)_” (p. 3) More specifically, in our case of NLPs, a foundation model would be models that
uses vast chunks of text data to extrapolate some co-occurence of symbols, and fine-tune this model
to accommodate human text interaction. Examples of such models would be GPT-3, BERT and
CLIP.

Furthermore, later in the report they also mention that there is, arguably, only one common property
of them; that they are self-supervising (p. 48). Which means, the models only task is to identify
some pattern of simultaneous occurrence of symbols in the data it has been given to analyze. The
purpose of this is to create new sequences of symbols using the identified pattern.
To achieve this goal, they utilize something called transfer learning, which means applying an
identified pattern from one task, in a different but similar task.

These types of models are dependent on the scale of the hardware, which they characterize as three-
fold; computer capacity, the transformer model architecture and the availability of training data.
Any model that fills the criteria of the aforementioned aspects of artificial intelligence, can be
considered a “Foundation Model” by Bommasani et als definition. However, they state in §2 that
this definition is only a informal label, and is likely to change in time.

## Critiques of Foundation Models
These models have faced some crtitique, perhaps most influentially from Bender et al. (2020) and
Bender et al. (2021). Bommasani et al. (2021) also acknowledge the difficulty in establishing
whether these models actually have understanding of language through extrapolating a pattern from
statistical data.

Bender et al. (2020) touches the core of the discussion, by separating form from meaning and
arguing that one cannot learn meaning from form alone. They refer to sources that suggest that
language acquisition in human children reflects this fact. These references indicates that children
rather learn from interaction with adult humans or with their surroundings in tandem with language
acquisition.
They further argue that statistical learning alone is not going to create algorithms that have an
understanding of the words they learn. This is because of a lack of grounding to an ostensible
representation in the statistical data. They promote the idea of augmented datasets, containing
perceptual data to go alongside the symbol representation. Without symbolic grounding, the model
cannot be expected to extract meaning from the form it is given.
In the same line of thought, Bender et al. (2021) also criticises the use of skewed datasets in NLPs,
calling them «stochastic parrots».

## Is It Truly a Foundation?
It becomes natural to use the Turing test as a starting point for deciding whether these models
actually understand language. A stochastic parrot wouldn't have passed the Turing test, so
Foundation Models wouldn't pass it either. We still don't completely known how our own
neurological structures, or what is involved, for language understanding to work. Therefore, it will be
difficult to say currently that foundation models are an artificial equivalent to our neurological
substrate for language comprehension. However, it seems very unlikely.

It can only be speculated that a foundation model, based on the same principles of our neurological
basis for language understanding, would actually understand language. Without the proper
grounding to perceptual data, or ostensible objects in reality, we cannot expect a machine to fully
understand through statistical learning alone. It seems more appropriate to build a foundation model
based on neurological principles of language understanding, if we want a machine that truly passes
the Turing test.

## Conclusion
The evidence presented here compels me to infer that humans have a physical neurological
substrate for language comprehension which enables us to understand the structure and grammar of
language. The neurology of language exists as a structural foundation, naturally most receptive to
language acquisition through speech acts. Due to the intrinsic structure of speech acts, it requires an
understanding of the transmitters intention, as well as the context of the utterance, in order for the
communication to be understood by the receiver. Speech acts can be seen as direct parallel to
conventional human interaction. This interaction is how adult humans interact with their children
during the critical period, and can be seen as a sort of imprinting. The way of understanding speech
is taught through statistical learning, by exposing children to speech acts in this critical period.
Thus, children are taught to understand language in “the domain of human action and interaction”.

In my opinion, modern machine learning systems are just «taught» to simulate language through
statistical learning, by throwing millions of examples at a mathematical algorithm designed to
extract some pattern based on the examples given. I support Bender et al. (2021) in calling the
current implementation of pre-trained language models “stochastic parrots”. This is because the
structure of a foundation model, does not structurally compare to our neurological foundation.

The only known structure to facilitate language comprehension is our neurological foundation. Only
by truly understanding the human neurological structures for language comprehension, -acquisition,
-and understanding, can we create a solid foundation for a GPLI. An NLP that mimics our
neurological foundation, instead of current implementations of foundation models, is a better
enabled machine to acquire language as a human would; through speech acts.

However, looking at the big picture, these foundation models are an important step towards the
ultimate goal. Which is understandable AI. As noted by Stanford themselves; what encapsulates the
label of foundation models are sure to change and grow as new research in this field emerges. And I
am hopeful and optimistic that by taking into account the criticisms of foundation model, we are
taking a step in the right direction.

## References:

Austin, J. L. (1962). _How to do things with words : the William James lectures delivered at Harvard University in 1955_. Harvard Univ. Press.

Baldwin, D. A. (1995). Understanding the link between joint attention and language. In C. Moore & P. J. Dunham (Eds.), _Joint attention: Its origins and role in development_ (pp. 131–158). Lawrence Erlbaum Associates, Inc.

Binder, J. R., Frost, J. A., Hammeke, T. A., Cox, R. W., Rao, S. M., & Prieto, T. (1997). Human Brain Language Areas Identified by Functional Magnetic Resonance Imaging. _The Journal of Neuroscience_, _17_ (1), 353–362. [https://doi.org/10.1523/jneurosci.17-01-00353.1997](https://doi.org/10.1523/jneurosci.17-01-00353.1997).

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? [Review of _On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?_ ]. In _Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency_ (pp. 610–623). Association for Computing Machinery. [https://doi.org/10.1145/3442188](https://doi.org/10.1145/3442188).

Bender, E. M., & Koller, A. (2020). Climbing Towards NLU: On Meaning, Form, and Understanding in Age of Data [Review of _Climbing Towards NLU: On Meaning, Form, and Understanding in Age of Data_ ]. In _Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics_ (pp. 5185–5198). Association for Computational Linguistics. [https://aclanthology.org/2020.acl-main](https://aclanthology.org/2020.acl-main).

Bommasani, R., Hudson, D.A., Adeli, E., Altman, R., Arora, S., Arx, S.V., Bernstein, M.S., Bohg, 
J., Bosselut, A., Brunskill, E., Brynjolfsson, E., Buch, S., Card, D., Castellon, R., Chatterji, N.S.,
Chen, A., Creel, K., Davis, J., Demszky, D., Donahue, C., Doumbouya, M., Durmus, E., Ermon, S.,
Etchemendy, J., Ethayarajh, K., Fei-Fei, L., Finn, C., Gale, T., Gillespie, L.E., Goel, K., Goodman,
N.D., Grossman, S., Guha, N., Hashimoto, T., Henderson, P., Hewitt, J., Ho, D.E., Hong, J., Hsu,
K., Huang, J., Icard, T.F., Jain, S., Jurafsky, D., Kalluri, P., Karamcheti, S., Keeling, G., Khani, F.,
Khattab, O., Koh, P., Krass, M.S., Krishna, R., Kuditipudi, R., Kumar, A., Ladhak, F., Lee, M., Lee,
T., Leskovec, J., Levent, I., Li, X., Li, X., Ma, T., Malik, A., Manning, C.D., Mirchandani, S.P.,
Mitchell, E., Munyikwa, Z., Nair, S., Narayan, A., Narayanan, D., Newman, B., Nie, A., Niebles, J.,
Nilforoshan, H., Nyarko, J.F., Ogut, G., Orr, L., Papadimitriou, I., Park, J.S., Piech, C., Portelance,
E., Potts, C., Raghunathan, A., Reich, R., Ren, H., Rong, F., Roohani, Y.H., Ruiz, C., Ryan, J.K.,
R'e, C., Sadigh, D., Sagawa, S., Santhanam, K., Shih, A., Srinivasan, K.P., Tamkin, A., Taori, R.,
Thomas, A.W., Tramèr, F., Wang, R.E., Wang, W., Wu, B., Wu, J., Wu, Y., Xie, S.M., Yasunaga, M.,
You, J., Zaharia, M.A., Zhang, M., Zhang, T., Zhang, X., Zhang, Y., Zheng, L., Zhou, K., & Liang,
P. (2021). _On the Opportunities and Risks of Foundation Models. ArXiv, abs/2108.07258._

Clark, H. H., & Clark, E. V. (1977). _Psychology and Language: An Introduction to Psycholinguistics._ Harcourt Brace Jovanovich.

Friedenberg, J. & Silverman, G. (2016). _Cognitive Science: An Introduction to The Study of Mind (3rd Ed.)_. SAGE Publications.

Geschwind, N. (1972). _Language and the Brain. Scientific American_, 226(4), 76–83. [https://doi.org/10.1038/scientificamerican0472-76](https://doi.org/10.1038/scientificamerican0472-76).

Kuhl, P. K. (2007). Is speech learning “gated” by the social brain?. _Developmental Science, 10_(1), 110–120. [https://doi.org/10.1111/j.1467-7687.2007.00572.x](https://doi.org/10.1111/j.1467-7687.2007.00572.x).

Lenneborg, E. (1967). _Biological Foundation of Language (1st corrected printing)._ John Wiley & Sons, Inc.

Searle, J. R. (1970). _Speech acts an essay in the philosophy of language_. Cambridge Univ. Press.

Searle, J. R. (1975). A Taxonomy of Illocutionary Acts [Review of _A Taxonomy of Illocutionary Acts_ ]. In K. Gunderson (Ed.), _Language, Mind, and Knowledge: Minnesota Studies in the Philosophy of Science_ (pp. 344–370). Burns & Maceachern Limited.

Tomasello, M., & Farrar, M. J. (1986). Joint Attention and Early Language. _Child Development_, _57_(6), 1454. [https://doi.org/10.2307/1130423](https://doi.org/10.2307/1130423)

Warren, P. (2019). _Introducing Psycholinguistics (7th printing)._ Cambridge University Press.

Winograd, T. (1980)_._ What Does it Mean to Understand Language? _Cognitive Science_, 4(3), 209–241. [https://doi.org/10.1207/s15516709cog0403_1](https://doi.org/10.1207/s15516709cog0403_1).
