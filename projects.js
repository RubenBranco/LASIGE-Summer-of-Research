const Projects = [
    {
        "title": "Co-Designing Customizable and Adaptable Intelligent Virtual Agents (IVAs) with Neurodivergent Individuals to Support Their Emotional Regulation",
        "num_students": 2,
        "description": `Neurodivergent individuals often experience difficulties with emotional regulation. Assistive Technologies (ATs) are promising alternatives to in-person psychotherapeutic interventions, as they may complement these interventions, can be used on demand, and allow for overcoming potential socio-communicative constraints. Intelligent Virtual Agents (IVAs) can promote emotional regulation in neurodivergent adults, increasing their independence and quality of life, especially if individually customized.

However, little is known about which IVAs’ features enhance engagement in this population, hindering the development of more effective ATs. Our goal is to co-design and develop a computational prototype with customizable and adaptable IVAs to study which features enhance neurodivergent adults’ acceptance of ATs for emotional regulation.

Our main contributions are: 1) a dataset of text annotated with the emotional information of neurodivergent adults; 2) an emotional model with Small Language Models to recognize neurodivergent emotions from text; 3) customizable and adaptable IVAs co-designed with neurodivergent adults.`,
        "mentors": "Prof. Soraia M. Alarcão, Isabel D. Trancoso",
        "research_line": "IHCI",
        "link": "https://forms.gle/YvhhkGX82L2da1gh6"
    },
    {
        "title": "A deep dive into hashtable design",
        "num_students": 1,
        "description": `Hash tables provide constant time lookup of data elements stored within, i.e. the time it takes to find an element is constant and doesn't increase as the hash table's number of stored elements increases.

Due to their efficiency, these data structures have a wealth of applications, ranging from caches and file system indexing, to databases, spell checkers, routing tables, and more.

The speed guarantees provided are due to the use of a hash function to index elements. Whenever a piece of data is inserted into a hash table, a hash is calculated from its key, thus obtaining its position within.

To retrieve this data, all one needs is to calculate the hash of the key, to obtain, in constant time, its position. However, hash tables are far from simple, and in the non-stop pursuit of efficiency and speed, these employ increasingly complex mechanisms to retain efficiency across varied scenarios.`,
        "mentors": "Prof. Pedro Ângelo",
        "research_line": "RSS",
        "link": "https://forms.gle/XBrqQ2F7Fhnsnsen8"
    },
    {
        "title": "Specification Synthesis of Liquid Types using Large Language Models",
        "num_students": 1,
        "description": `Liquid types offer powerful type refinements that constrain program behavior through predicates, such as x : int where {x > 0} which represents positive integers. By allowing static verification of these constraints, liquid types improve software reliability by detecting potential runtime errors and logic violations early.

Since their introduction, the programming languages community has developed several practical implementations, including LiquidJava (https://catarinagamboa.github.io/liquidjava.html), LiquidHaskell (https://ucsd-progsys.github.io/liquidhaskell/), and Flux (https://flux-rs.github.io/flux/index.html), which extend Java, Haskell, and Rust, respectively, with liquid types. Despite their proven benefits, widespread adoption of liquid types faces many challenges:
    - The specification process demands formal methods expertise beyond the training of most software developers;
    - Specifications often redundantly formalize what already exists in natural language documentation;
    - The manual nature of specification writing is labor-intensive and error-prone;
    - Maintaining consistency between formal specifications and evolving documentation requires ongoing effort.

This project addresses these barriers by automating the generation of liquid types in existing codebases. We will evaluate various prompting techniques across popular large language models (e.g., Copilot, GPT-4o, Claude, and Mistral) to generate correct specifications. Furthermore, we will develop an AI agent tool that generates liquid type specifications from natural language documentation and runs the verifiers to check if the source code is compliant.`,
        "mentors": "Prof. Alcides Fonseca, Paulo Canelas, Catarina Gamboa",
        "research_line": "RSS",
        "link": "https://forms.gle/xBgEG92feuJvVQ1F7"
    },
    {
        "title": "Drones poweres by Android",
        "num_students": 4,
        "description": `Drones typically rely on on-board computers to see and move through the world. Can we simple use an android phone instead? Lets try to use its sensors such as gps, cameras and its communication capabilities to navigate autonomously! Let's be be the first doing it?`,
        "mentors": "Prof. Luís Pinto",
        "research_line": "CPS",
        "link": "https://forms.gle/cLydo22YJRjqTHu18"
    },
    {
        "title": "Remote Grandparenting: Telepresence Robots for Family Connection and Shared Agency in the Home",
        "num_students": 2,
        "description": `This project explores how older adults, particularly grandparents, can remotely connect with their families using telepresence robots placed in domestic environments. By controlling a robot from a distance, grandparents can virtually "drop in" to family routines, such as mealtimes or playtime, and engage in shared moments with their loved ones, allowing virtual mobility, presence, and spontaneity in interaction.

The motivation for this work lies in addressing the emotional distance and social disconnection often experienced by older adults, especially those living far from younger family members. Through in-the-wild studies in real households, we aim to understand how telepresence robots can support meaningful connection and what new forms of human agency, roles, and family dynamics emerge when older adults gain the ability to navigate and act within someone else’s home.

From a research perspective, the project contributes to the field of Human-Robot Interaction by studying everyday use of robots in naturalistic contexts, surfacing design challenges, ethical considerations, and social implications. The findings may inform the development of more inclusive and empowering technologies for intergenerational connection and remote presence.`,
        "mentors": "Prof. Tiago Guerreiro, Hugo Simão",
        "research_line": "IHCI",
        "link": "https://forms.gle/pyDa9rPrJ3wGmTK26"
    },
    {
        "title": "Robots for Good: Exploring Altruism, Identity, and Perception in Elder Care and Community Settings",
        "num_students": 2,
        "description": `This project investigates how older adults can use humanoid robots to perform altruistic acts in their communities or care settings. Preliminary studies have shown that while some people see sending a robot to help others as a valid expression of altruism, others question whether it still counts as altruistic when the person is not physically present.

Additional concerns include how recipients perceive robot-mediated help, whether the robot is seen as a proxy or a separate entity, and how anonymity affects the value of the act. We will explore these themes across two living contexts: local neighborhoods and elder care homes.

In both cases, older adults will be invited to collaborate with or delegate tasks to a robot to assist others, such as delivering messages, offering small services, or spreading kindness. The goal is to better understand how altruism is redefined through robotics, and how the dynamics of identity, intention, and reception play out when technology becomes the intermediary.`,
        "mentors": "Prof. Tiago Guerreiro, Hugo Simão",
        "research_line": "IHCI",
        "link": "https://forms.gle/LxAA6NPGMmi1A97a6"
    },
    {
        "title": "What users can do about mobile energy consumption?",
        "num_students": 1,
        "description": `Battery longevity is a concern for smartphone users, yet the real-world effects of some easily adjusted settings that may heavily impact energy consumption remain poorly characterized outside controlled laboratory studies. User guidance on saving battery life come mostly from grey literature, which can be incomplete or misleading. While early academic efforts have begun to explore this space, their findings often lack generalizability to diverse, everyday usage scenarios.

In this project, we employ ebserver, an automated, empirical framework with fine-grained energy-measurement capabilities, to collect the energy associated with some important user-configurable parameters: display refresh rate, screen brightness, camera-flash activation, network interface selection (Wi-Fi vs. cellular), UI theming (e.g., dark mode), and more. By executing a suite of representative usage scenarios, we will build a representative dataset that isolates each factor’s contribution to overall battery drain on real devices.

Applying rigorous statistical methods (for example, multivariate regression), we will derive energy coefficients that quantify the marginal cost of each setting. These coefficients will drive personalized, context-aware recommendations: though some tips (such as lowering refresh rate for static content or favoring Wi-Fi over cellular) are already well understood, many subtler inefficiencies, like the differing impact of dark mode on OLED versus LCD panels, remain hidden without empirical data to support it. By translating these insights into clear, actionable advice, our work empowers users to fine-tune their device configurations, extend battery life, and develop a nuanced understanding of what really drives mobile energy consumption.`,
        "mentors": "Prof. Wellington de Oliveira Júnior",
        "research_line": "RSS",
        "link": "https://forms.gle/FfzfL34NnCWqAgit7"
    },
    {
        "title": "An exploration of Just-in-Time compilation",
        "num_students": 1,
        "description": `Compilers are an essential piece of software, allowing a program, written in a specific programming language, to be translated into machine code, which is executable in a given processor architecture.

Essentially, the compiler translates programs written in higher-level languages, which provide abstractions to help write meaningful programs, to instructions of the target machine, thus creating an executable program. Some compilers, like Java's OpenJDK compiler, instead translates programs into bytecode, which is then executed in the Java Virtual Machine.

Besides the compilation approach, one can opt for interpretation, where a program is executed as is, without passing through a compilation phase. This approach is typically less performant when compared to compiling a program, but does enjoy other advantages.

Just-in-Time compilation is an advanced compiler technique, aiming to increase the efficiency of compiled programs, by inspecting the program's execution and optimizing certain parts of it. In the JVM, the JiT compiler analizes the program's execution, and for those parts of the programs that are executed most frequently, it compiles them directly to machine code, which is executed faster. Besides compiling, other optimizations, such as dead code elimination, inlining or loop optimizations may also be performed.`,
        "mentors": "Prof. Pedro Ângelo",
        "research_line": "RSS",
        "link": "https://forms.gle/hhxp8mbycki1aaJZ8"
    },
    {
        "title": "Exploring the integration of open Parkinson’s data for Multimodal Patient-centric learning",
        "num_students": 2,
        "description": `The integration of heterogeneous biomedical data is critical for advancing personalized healthcare, particularly in complex neurodegenerative diseases like Parkinson’s Disease (PD). Recent advances in multimodal data integration have shown promise in improving prognostic accuracy and patient stratification by leveraging diverse data sources such as clinical, imaging, genomic, and wearable-derived data.

This summer project aims to explore the integration of open-access Parkinson’s datasets to enable multimodal, patient-centric learning. The objectives are to (1) systematically characterize the available data modalities and their formats, (2) analyze population-level characteristics, (3) develop initial data visualizations for exploratory insights, (4) identify clinical criteria relevant to defining critical endpoints, and (5) design preprocessing pipelines for robust multimodal data integration.

By addressing these aims, this work will support future research on advanced machine learning applications in PD, supporting more personalized and interpretable health solutions that reflect the complexity of decision support systems in Parkinson’s care.`,
        "mentors": "Prof. Diogo Soares",
        "research_line": "DSI",
        "link": "https://forms.gle/STKnBdKR8DHMSDyCA"
    },
    {
        "title": "CBFT-Wallet: Uma Carteira Digital para gestão de Cripto-Moedas com elevadas garantias de segurança",
        "num_students": 1,
        "description": `A CBFT-Wallet é uma Carteira Digital, implementada apenas em software, que consegue atingir níveis de segurança comparáveis com carteiras digitais em hardware com componentes seguros. Para tal, usa técnicas avançadas de criptografia e de sistemas distribuídos, como assinaturas de grupo e geração de chaves distribuída, que essencialmente partem as chaves criptográficas do utilizador em vários pedaços, de forma a que mesmo que um ou mais pedaços sejam comprometidos, as chaves como um todo permanecem seguras e privadas, protegendo assim as cripto-moedas do utilizador.

A CBFT-Wallet foi desenvolvida em Kotlin (https://github.com/bernymac/CBFT-Wallet) e suporta atualmente Bitcoin e Ethereum. No entanto, os algoritmos para assinaturas Ethereum estão implementados em C e são importados através do Java JNI. O objectivo deste projeto é implementar os algoritmos de assinaturas Ethereum em Kotlin ou em Java e testar a implementação desenvolvida num cluster de servidores pertencente ao grupo de investigação.`,
        "mentors": "Prof. Bernardo Ferreira, Prof. Alysson Bessani",
        "research_line": "DS2",
        "link": "https://forms.gle/H32m6KeY4DMyHajv6"
    },
    {
        "title": "Improving the Usability of the Æon Programming Language",
        "num_students": 2,
        "description": `Our team at LASIGE has developed the Æon programming language, featuring liquid types. Liquid types extend traditional types (e.g. Int) with a refinement (e.g. Int | x > 0). These refinements can be used to improve the quality of code, adding documentation and preventing bugs.

However, developers now spend more time adding the annotations. In this project we want to make the refinement language more expressive, and improve the program synthesis capabilities. If programmers only write the type and the compiler can generate the code, then it is not slower!

Another direction is to explore how to add LLM support for a language that does not exist yet!`,
        "mentors": "Prof. Alcides Fonseca",
        "research_line": "RSS",
        "link": "https://forms.gle/CEyAAWf5Fm4RVPba9"
    },
    {
        "title": "Theorem Synthesis",
        "num_students": 1,
        "description": `With Proofs = Programs, mathematical theorems can be written as computer programs. Type-checking a program corresponds to checking whether a proof is correct.

Mathematicians like Fields Medalist Terrence Tao are now using computer programs (and even LLMs) to prove new theorems and do mathematics.

In this project, we want to help them by developing a correct-by-construction approach to generating programs/proofs that instead of relying on LLMs, rely on mathematical principles, so they are never wrong.`,
        "mentors": "Prof. Alcides Fonseca",
        "research_line": "RSS",
        "link": "https://forms.gle/KyRApkWrBWTuNYE29"
    },
    {
        "title": "Making Blossom Robots",
        "num_students": 2,
        "description": `As robots become more frequent in our society, it is essential to build cheap and DIY robots that are flexible to different contexts to explore their impact on human-robot interaction. Blossom (https://dl.acm.org/doi/abs/10.1145/3310356) is an open-source robot with flexible skin and applications that can be built and programmed to perform fluid behaviours.

In this summer research project, we want to develop several blossom robots for future research. The students will be build a couple of robots and design and develop a simple user study, using both Blossom, in the faculty's premises. (github for the repository https://github.com/hrc2/blossom-public).`,
        "mentors": "Prof. Isabel Neto",
        "research_line": "IHCI",
        "link": "https://forms.gle/G7dRSDvhoV5CrSNa7"
    },
    {
        "title": "Testing Message-passing Concurrent Programs",
        "num_students": 1,
        "description": `Concurrent programming is notoriously difficult. It is nevertheless unavoidable in a world where the simplest of the smartphones runs on eight cores.

Message passing is a promising approach to develop concurrent programs. The Go programming language says "Don't communicate by sharing memory; share memory by communicating". Still, getting message passing concurrent programs right is far from easy.

Some languages are better than others at getting concurrency right. We believe that the FreeST programming language, https://freest-lang.github.io, is well positioned to address the challenges of concurrent programming. In FreeST, the patterns of messages exchanged by threads, aka, the communication protocol, is written as a type and checked at compile time.

This project aims at writing (or adapting) a series of small concurrent programs to test (and stress) the new FreeST compiler. There may also be opportunities to work on the complier itself.`,
        "mentors": "Prof. Vasco Vasconcelos, Gil Silva",
        "research_line": "RSS",
        "link": "https://forms.gle/eaQkL9YJaZbuZQny9"
    },
    {
        "title": "Wi-Fi-based buildings occupancy detection, estimation, and location",
        "num_students": 1,
        "description": `Accurate, real-time data on human presence and location is essential to maximize energy efficiency, space utilization, and occupant comfort in smart buildings.

However, existing occupancy and device tracking methods often suffer from significant limitations. These include static and inflexible deployment across different buildings and reliance on costly, building-specific hardware or extensive software modifications.

This project introduces a new framework for efficiently and rapidly identifying indoor locations and building occupancy. Our approach leverages reusable and adaptable models that enable seamless deployment across diverse environments—without manual configuration or labor-intensive recalibration.`,
        "mentors": "Prof. José Cecílio",
        "research_line": "CPS",
        "link": "https://forms.gle/xX6a4e2AAgSaiGAF8"
    },
];