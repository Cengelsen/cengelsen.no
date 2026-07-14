#let data = json("_cv-data.json")
#let accent = rgb(data.accentColor)
#let profile = data.profileId
#let is-developer = profile == "developer"
#let is-sysadmin = profile == "systemadministrator"
#let is-conservative = profile == "administrator"
#let is-functional = profile == "organization-builder"

#let skill-tag(label) = {
  if is-conservative {
    text(size: 8pt, fill: luma(60))[#label]
  } else {
    box(
      fill: accent.lighten(88%),
      stroke: 0.5pt + accent.lighten(40%),
      radius: 2pt,
      inset: (x: 4pt, y: 1.5pt),
    )[#text(size: 7.5pt, fill: accent)[#label]]
  }
}

#let render-inline-skills(tags) = {
  if is-conservative {
    text(size: 8pt, fill: luma(60))[#tags.join(" · ")]
  } else {
    tags.map(t => skill-tag(t)).join(h(3pt))
  }
}

// ── Page setup ──────────────────────────────────────────────────────

#set page(
  paper: "a4",
  margin: (
    top: if is-conservative { 2cm } else { 1.8cm },
    bottom: 2cm,
    left: 2cm,
    right: 2cm,
  ),
  footer: context {
    let current = counter(page).get().first()
    let total = counter(page).final().first()
    if current > 1 {
      align(center, text(size: 8pt, fill: luma(160))[
        #data.name #h(1em) — #h(1em) #current / #total
      ])
    }
  },
)

#set text(
  font: ("Inter", "Noto Sans", "Liberation Sans", "DejaVu Sans"),
  size: if is-functional { 10.5pt } else { 10pt },
  fill: luma(30),
)
#set par(
  leading: if is-functional { 0.7em } else { 0.65em },
  spacing: if is-functional { 0.9em } else { 0.8em },
)
#set heading(numbering: none)

#show heading.where(level: 1): it => {
  v(if is-functional { 0.8em } else { 0.5em })
  block(below: 0.3em)[
    #text(
      size: 12pt,
      weight: "bold",
      fill: accent,
      tracking: if is-conservative { 0.03em } else { 0.08em },
    )[#if is-conservative { it.body } else { upper(it.body) }]
    #v(2pt)
    #line(
      length: 100%,
      stroke: if is-conservative { 0.7pt + accent } else { 1.2pt + accent },
    )
  ]
}

// ── Header ──────────────────────────────────────────────────────────

#align(center)[
  #text(size: if is-conservative { 20pt } else { 18pt }, weight: "bold", fill: luma(20))[#data.name]
  #v(3pt)
  #text(size: 11pt, fill: accent, weight: 500)[#data.summary.title]
  #v(2pt)
  #text(size: 9pt, fill: luma(110))[#data.summary.location]
  #v(6pt)
  #text(size: if is-functional { 9.5pt } else { 9pt }, fill: luma(70))[#data.summary.bio]
  #if (is-developer or is-sysadmin or is-functional) and data.contact.len() > 0 [
    #v(8pt)
    #{
      let items = data.contact.map(entry => {
        [#text(size: 8pt, weight: 600, fill: luma(80))[#entry.platform] #h(2pt) #text(size: 8pt, fill: accent)[#link(entry.url)[#entry.label]]]
      })
      items.join([#h(0.6em)#text(size: 8pt, fill: luma(170))[|]#h(0.6em)])
    }
  ]
]
#v(4pt)
#line(
  length: 100%,
  stroke: if is-conservative { 1pt + accent } else { 1.5pt + accent },
)

// ── Section renderers ───────────────────────────────────────────────

#let entry-gap = if is-functional { 0.7em } else { 0.5em }

#let render-work(entries, hero-company: false) = {
  for (i, entry) in entries.enumerate() {
    if is-conservative and i > 0 {
      v(1pt)
      line(length: 100%, stroke: 0.3pt + luma(200))
      v(3pt)
    }
    block(breakable: false, below: entry-gap)[
      #grid(
        columns: (1fr, auto),
        gutter: 0.5em,
        {
          if hero-company [
            #text(size: 10pt, weight: "bold")[#entry.company] #h(4pt) #text(size: 9pt, fill: luma(70), style: "italic")[#entry.role]
          ] else [
            #text(size: 10pt, weight: "bold")[#entry.role]
          ]
        },
        text(size: 8pt, fill: luma(110))[
          #entry.startDate — #if entry.endDate == none { data.labels.present } else { entry.endDate }
        ],
      )
      #if not hero-company [
        #text(size: 9pt, fill: luma(70))[#entry.company]
      ]
      #v(2pt)
      #for bullet in entry.description [
        #pad(left: 0.6em)[
          #text(size: 9pt, fill: luma(50))[• #bullet]
        ]
      ]
      #if entry.skillTags.len() > 0 [
        #v(3pt)
        #render-inline-skills(entry.skillTags)
      ]
    ]
  }
}

#let render-education(entries) = {
  for entry in entries {
    block(breakable: false, below: entry-gap)[
      #grid(
        columns: (1fr, auto),
        gutter: 0.5em,
        align: (left, right),
        text(size: 10pt, weight: "bold")[#entry.field],
        align(right, stack(
          dir: ttb,
          spacing: 2pt,
          if entry.credits != none [
            box(
              fill: accent.lighten(88%),
              stroke: 0.5pt + accent.lighten(60%),
              radius: 2pt,
              inset: (x: 5pt, y: 2pt),
            )[
              #text(size: 8pt, weight: "bold", fill: accent)[
                #entry.credits #data.labels.educationCreditsUnit
              ]
            ]
          ],
          text(size: 8pt, fill: luma(110))[
            #entry.startDate — #if entry.endDate == none { data.labels.present } else { entry.endDate }
          ],
        )),
      )
      #text(size: 9pt, fill: luma(70))[
        #entry.institution
        #h(0.25em)
        #text(fill: luma(110))[·]
        #h(0.25em)
        #entry.degree
      ]
      #if entry.description != none [
        #v(2pt)
        #text(size: 9pt, fill: luma(50))[#entry.description]
      ]
    ]
  }
}

#let render-coursework(groups, replaced) = {
  if data.courseworkTotalCredits != none and data.courseworkTotalCredits > 0 [
    #block(below: 0.8em, width: 100%)[
      #box(
        width: 100%,
        stroke: 0.5pt + luma(190),
        fill: luma(248),
        radius: 2pt,
        inset: (x: 8pt, y: 4pt),
      )[
        #grid(
          columns: (1fr, auto),
          gutter: 0.5em,
          align: (left, right),
          text(size: 8.5pt, weight: "bold")[#data.labels.courseCreditsTotal],
          text(size: 8.5pt, weight: "bold", fill: accent)[#data.courseworkTotalCredits #data.labels.educationCreditsUnit],
        )
      ]
    ]
  ]

  for group in groups {
    block(below: 0.8em)[
      #grid(
        columns: (1fr, auto),
        gutter: 0.5em,
        align: (left, right),
        text(size: 9.5pt, weight: "bold")[#group.degree],
        if group.credits != none and group.credits > 0 [
          text(size: 8pt, weight: "bold", fill: accent)[#group.credits #data.labels.educationCreditsUnit]
        ],
      )
      #v(4pt)

      #if group.overlap.len() > 0 [
        #text(size: 7.5pt, fill: luma(110), style: "italic")[#data.labels.courseOverlap:]
        #v(2pt)
        #for item in group.overlap [
          #box(
            stroke: 0.5pt + luma(160),
            radius: 2pt,
            inset: (x: 4pt, y: 1pt),
          )[
            #text(size: 7pt, fill: luma(70))[#item.name]
            #h(3pt)
            #text(size: 6.5pt, fill: luma(130))[#item.code]
            #if item.credits != none [
              #h(3pt)
              #text(size: 6.5pt, weight: "bold", fill: accent)[#data.labels.courseCreditsLabel #item.credits]
            ]
          ]
          #h(3pt)
        ]
        #v(4pt)
        #line(length: 100%, stroke: 0.5pt + luma(210))
        #v(4pt)
      ]

      #for tg in group.typeGroups [
        #if tg.typeLabel != "" [
          #v(2pt)
          #text(size: 7.5pt, weight: "bold", tracking: 0.05em, fill: luma(100))[#upper(tg.typeLabel)]
          #v(3pt)
        ]
        #for course in tg.courses [
          #block(breakable: false, below: 4pt)[
            #grid(
              columns: (1fr, auto),
              gutter: 4pt,
              align: (left, right),
              text(size: 8pt, weight: 600)[#course.name],
              align(right, stack(
                dir: ttb,
                spacing: 1pt,
                text(size: 7pt, fill: luma(130))[
                  #course.code#if course.semester != none { " · " + course.semester }
                ],
                if course.credits != none {
                  text(size: 6.5pt, weight: "bold", fill: accent)[#data.labels.courseCreditsLabel #course.credits]
                },
              )),
            )
            #text(size: 7pt, fill: luma(70))[#course.description]
            #if course.skillTags.len() > 0 [
              #v(1pt)
              #render-inline-skills(course.skillTags)
            ]
            #if course.replaces != none [
              #v(1pt)
              #text(size: 6.5pt, fill: luma(120), style: "italic")[#data.labels.courseReplaces #course.replaces]
            ]
          ]
        ]
        #v(3pt)
      ]
    ]
  }

  if replaced.len() > 0 [
    #block(below: 0.8em)[
      #text(size: 9.5pt, weight: "bold")[#data.labels.courseReplacedSection]
      #v(4pt)
      #for item in replaced [
        #box(
          stroke: 0.5pt + luma(160),
          radius: 2pt,
          inset: (x: 4pt, y: 1pt),
        )[
          #text(size: 7pt, fill: luma(70))[#item.name]
          #h(3pt)
          #text(size: 6.5pt, fill: luma(130))[#item.code]
          #if item.credits != none [
            #h(3pt)
            #text(size: 6.5pt, weight: "bold", fill: accent)[#data.labels.courseCreditsLabel #item.credits]
          ]
          #if item.replacedBy != none [
            #h(3pt)
            #text(size: 6.5pt, fill: luma(120), style: "italic")[#data.labels.courseReplacedBy #item.replacedBy]
          ]
        ]
        #h(3pt)
      ]
    ]
  ]
}

#let render-skills(categories) = {
  if is-developer {
    grid(
      columns: (1fr, 1fr),
      column-gutter: 1.5em,
      row-gutter: 0.6em,
      ..categories.map(cat => [
        #text(size: 9pt, weight: "bold", tracking: 0.03em)[#upper(cat.category)]
        #v(3pt)
        #render-inline-skills(cat.skills)
      ])
    )
  } else if is-conservative {
    grid(
      columns: (auto, 1fr),
      column-gutter: 1.2em,
      row-gutter: 0.5em,
      ..categories.map(cat => (
        [#text(size: 9pt, weight: "bold")[#cat.category]],
        [#text(size: 8pt, fill: luma(60))[#cat.skills.join("  ·  ")]],
      )).flatten()
    )
  } else {
    for cat in categories {
      block(below: entry-gap)[
        #text(size: 9pt, weight: "bold", tracking: 0.03em)[#upper(cat.category)]
        #v(3pt)
        #render-inline-skills(cat.skills)
      ]
    }
  }
}

#let render-languages(entries) = {
  for entry in entries {
    block(below: 3pt)[
      #grid(
        columns: (1fr, auto),
        text(size: 9pt, weight: 600)[#entry.language],
        text(size: 8pt, fill: luma(110), style: "italic")[#entry.proficiency],
      )
    ]
  }
}

#let render-qualities(entries) = {
  for entry in entries {
    block(below: 4pt)[
      #text(size: 9pt, weight: 600)[#entry.name]
      #linebreak()
      #text(size: 8pt, fill: luma(70))[#entry.description]
    ]
  }
}

#let render-certificates(entries) = {
  for entry in entries {
    block(breakable: false, below: 0.4em)[
      #grid(
        columns: (1fr, auto),
        [
          #text(size: 9pt, weight: 600)[#entry.name] \
          #text(size: 8pt, fill: luma(70))[#entry.issuer]
        ],
        text(size: 8pt, fill: luma(110))[#entry.date],
      )
    ]
  }
}

#let render-projects(entries) = {
  for project in entries {
    block(breakable: false, below: entry-gap)[
      #text(size: 9pt, weight: "bold")[#project.name]
      #linebreak()
      #text(size: 8pt, fill: luma(70))[#project.description]
      #v(2pt)
      #render-inline-skills(project.techStack)
      #if project.skillTags.len() > 0 [
        #if is-conservative [
          #text(size: 8pt, fill: luma(60))[ · ]#render-inline-skills(project.skillTags)
        ] else [
          #h(3pt)
          #render-inline-skills(project.skillTags)
        ]
      ]
      #v(2pt)
      #{
        if project.githubUrl != none [
          #text(size: 8pt, fill: accent)[#underline(offset: 2pt, stroke: 0.5pt + accent)[#link(project.githubUrl)[#data.labels.viewProject]]]
          #h(1em)
        ]
        if project.liveUrl != none [
          #text(size: 8pt, fill: accent)[#underline(offset: 2pt, stroke: 0.5pt + accent)[#link(project.liveUrl)[#data.labels.liveDemo]]]
        ]
      }
    ]
  }
}

#let render-contact(entries) = {
  grid(
    columns: (1fr,) * calc.min(entries.len(), 3),
    gutter: 1em,
    ..entries.map(entry => [
      #text(size: 8pt, weight: "bold")[#entry.platform:] #text(size: 8pt, fill: accent)[#link(entry.url)[#entry.label]]
    ])
  )
}

// ── Main section routing ────────────────────────────────────────────

#for section in data.sections {
  if section == "experience" and data.experience.len() > 0 {
    heading(level: 1)[#data.labels.experience]
    render-work(data.experience)
  } else if section == "volunteer" and data.volunteer.len() > 0 {
    heading(level: 1)[#data.labels.volunteer]
    render-work(data.volunteer, hero-company: is-functional)
  } else if section == "education" and data.education.len() > 0 {
    heading(level: 1)[#data.labels.education]
    render-education(data.education)
  } else if section == "coursework" and (data.courseworkGroups.len() > 0 or data.courseworkReplaced.len() > 0) {
    heading(level: 1)[#data.labels.coursework]
    render-coursework(data.courseworkGroups, data.courseworkReplaced)
  } else if section == "skills" and data.skills.len() > 0 {
    heading(level: 1)[#data.labels.skills]
    render-skills(data.skills)
  } else if section == "languages" and data.languages.len() > 0 {
    heading(level: 1)[#data.labels.languages]
    render-languages(data.languages)
  } else if section == "certificates" and data.certificates.len() > 0 {
    heading(level: 1)[#data.labels.certificates]
    render-certificates(data.certificates)
  } else if section == "projects" and data.projects.len() > 0 {
    heading(level: 1)[#data.labels.projects]
    render-projects(data.projects)
  } else if section == "qualities" and data.qualities.len() > 0 {
    heading(level: 1)[#data.labels.qualities]
    render-qualities(data.qualities)
  } else if section == "contact" and data.contact.len() > 0 and not is-developer and not is-sysadmin and not is-functional {
    heading(level: 1)[#data.labels.contact]
    render-contact(data.contact)
  }
}
