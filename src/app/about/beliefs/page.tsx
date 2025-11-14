"use client";

import { Book, Heart, Users, Cross, Droplets, Globe2, ChevronDown, ChevronUp, Church } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface BeliefSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

export default function BeliefsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]
    );
  };

  const beliefs: BeliefSection[] = [
    {
      id: "triune-god",
      title: "The Triune God",
      icon: <Cross className="h-8 w-8 text-white" />,
      content: [
        "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. This divine mystery is central to our faith and understanding of God's nature.",
        "God the Father is the creator of all things, who loves us with an everlasting love and desires relationship with all people.",
        "God the Son, Jesus Christ, is fully God and fully human. Through his life, death, and resurrection, he offers salvation and reconciliation to all who believe.",
        "God the Holy Spirit is present and active in the world today, empowering believers, transforming lives, and guiding the church in its mission.",
      ],
    },
    {
      id: "scripture",
      title: "Scripture",
      icon: <Book className="h-8 w-8 text-white" />,
      content: [
        "We believe the Bible is the inspired Word of God, containing all things necessary for salvation. Scripture is our primary authority for faith and practice.",
        "The Old and New Testaments reveal God's will and purpose for humanity, pointing us to Christ and showing us how to live as his followers.",
        "As United Methodists, we interpret Scripture through the lens of tradition, reason, and experience - what is known as the Wesleyan Quadrilateral.",
        "We encourage regular Bible study, both individually and in community, as essential to spiritual growth and discipleship.",
      ],
    },
    {
      id: "grace",
      title: "Grace",
      icon: <Heart className="h-8 w-8 text-white" />,
      content: [
        "We believe in God's prevenient grace - God's love and favor extended to all people before we even seek Him. God takes the first step toward us.",
        "Through justifying grace, we are forgiven and brought into right relationship with God through faith in Jesus Christ. We are saved by grace through faith, not by our own works.",
        "Sanctifying grace enables us to grow in holiness and Christlikeness throughout our lives. This is the process of becoming who God created us to be.",
        "Grace is both a free gift and a transforming power. It is available to all and can never be earned, only received with gratitude and lived out in love.",
      ],
    },
    {
      id: "church",
      title: "The Church",
      icon: <Users className="h-8 w-8 text-white" />,
      content: [
        "We believe the Church is the Body of Christ, a community of believers called together by God to worship, grow, serve, and share the good news of Jesus.",
        "The Church is both universal - encompassing all believers throughout time and space - and local - expressed in congregations where we gather for worship and fellowship.",
        "As United Methodists, we are connected to a global denomination that values both personal holiness and social holiness, believing faith must be lived out in acts of compassion and justice.",
        "Every member of the Body has gifts and a calling. We believe in the priesthood of all believers and encourage everyone to discover and use their gifts in ministry.",
      ],
    },
    {
      id: "sacraments",
      title: "Sacraments",
      icon: <Droplets className="h-8 w-8 text-white" />,
      content: [
        "We recognize two sacraments instituted by Christ: Baptism and Holy Communion. These are visible signs of God's invisible grace and love.",
        "Baptism is the sacrament of initiation into the Christian faith and the Church. We practice both infant and adult baptism, recognizing God's grace at work in all ages.",
        "Holy Communion (the Lord's Supper) is a sacred meal where we remember Christ's sacrifice, experience his real presence, and are nourished for Christian living.",
        "The sacraments are means of grace - ways God works in our lives to strengthen, sustain, and transform us. All who seek God are welcome at the Lord's table.",
      ],
    },
    {
      id: "mission",
      title: "Mission",
      icon: <Globe2 className="h-8 w-8 text-white" />,
      content: [
        "We believe the Church exists for mission - to make disciples of Jesus Christ for the transformation of the world. This is not optional but central to our identity.",
        "Our mission includes both evangelism (sharing the good news) and social action (serving those in need and working for justice). Faith and works go hand in hand.",
        "We are called to serve locally and globally, responding to human need wherever we find it and challenging injustice in all its forms.",
        "Every disciple is a missionary. We believe mission is not just for professionals but for all believers as we live out our faith in daily life and share God's love with others.",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Beliefs</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              What We Believe as United Methodists
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our faith is rooted in Scripture, shaped by tradition, informed by reason, and
              experienced in community. Discover the theological foundations that guide us.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <Church className="h-10 w-10 text-[#0b5a7f] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold mb-4">A United Methodist Congregation</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Hopewell United Methodist Church is part of the United Methodist Church, a
                    global denomination with millions of members worldwide. We hold to the historic
                    tenets of Christian faith while embracing the Wesleyan tradition of grace,
                    love, and service to others.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Our theological heritage comes from John Wesley, an 18th-century Anglican
                    priest who emphasized that authentic faith must be both believed in the heart
                    and lived out in action. Wesley taught that God's grace is freely offered to
                    all people and that we are called to grow in holiness and serve our neighbors.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As United Methodists, we seek to balance personal piety with social
                    responsibility, believing that faith without works is incomplete and that true
                    worship leads to compassionate service.
                  </p>
                </div>
              </div>
            </div>

            {/* Wesleyan Quadrilateral */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Understand Our Faith
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                United Methodists use four sources to discern God's will and understand our faith,
                commonly known as the Wesleyan Quadrilateral:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border-2 border-[#0b5a7f] rounded-lg p-6">
                  <div className="text-4xl mb-3">📖</div>
                  <h3 className="text-xl font-bold mb-2">Scripture</h3>
                  <p className="text-gray-700 text-sm">
                    The primary source and foundation for all theological reflection
                  </p>
                </div>
                <div className="bg-white border-2 border-[#0b5a7f] rounded-lg p-6">
                  <div className="text-4xl mb-3">⛪</div>
                  <h3 className="text-xl font-bold mb-2">Tradition</h3>
                  <p className="text-gray-700 text-sm">
                    The wisdom and experience of the Church throughout history
                  </p>
                </div>
                <div className="bg-white border-2 border-[#0b5a7f] rounded-lg p-6">
                  <div className="text-4xl mb-3">💭</div>
                  <h3 className="text-xl font-bold mb-2">Reason</h3>
                  <p className="text-gray-700 text-sm">
                    Critical thinking and rational reflection on God's truth
                  </p>
                </div>
                <div className="bg-white border-2 border-[#0b5a7f] rounded-lg p-6">
                  <div className="text-4xl mb-3">❤️</div>
                  <h3 className="text-xl font-bold mb-2">Experience</h3>
                  <p className="text-gray-700 text-sm">
                    Personal and communal encounters with God's presence and work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs Sections */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Core Beliefs
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Click on each section to explore what we believe
            </p>

            <div className="space-y-4">
              {beliefs.map((belief) => {
                const isExpanded = expandedSections.includes(belief.id);
                return (
                  <div
                    key={belief.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all"
                  >
                    {/* Header - Clickable */}
                    <button
                      onClick={() => toggleSection(belief.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#0b5a7f] rounded-full flex items-center justify-center flex-shrink-0">
                          {belief.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {belief.title}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {isExpanded ? (
                          <ChevronUp className="h-6 w-6 text-[#0b5a7f]" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-[#0b5a7f]" />
                        )}
                      </div>
                    </button>

                    {/* Content - Expandable */}
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-200">
                        <div className="space-y-4 ml-[72px]">
                          {belief.content.map((paragraph, idx) => (
                            <p key={idx} className="text-gray-700 text-lg leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Expand/Collapse All Button */}
            <div className="text-center mt-8">
              <button
                onClick={() =>
                  setExpandedSections(
                    expandedSections.length === beliefs.length
                      ? []
                      : beliefs.map((b) => b.id)
                  )
                }
                className="text-[#0b5a7f] font-semibold hover:underline"
              >
                {expandedSections.length === beliefs.length
                  ? "Collapse All Sections"
                  : "Expand All Sections"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Creeds Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Historic Christian Creeds
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Apostles' Creed */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  The Apostles' Creed
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-2 text-base">
                  <p>I believe in God, the Father Almighty,</p>
                  <p className="ml-4">creator of heaven and earth.</p>
                  <p className="mt-3">I believe in Jesus Christ, his only Son, our Lord,</p>
                  <p className="ml-4">who was conceived by the Holy Spirit,</p>
                  <p className="ml-4">born of the Virgin Mary,</p>
                  <p className="ml-4">suffered under Pontius Pilate,</p>
                  <p className="ml-4">was crucified, died, and was buried;</p>
                  <p className="ml-4">he descended to the dead.</p>
                  <p className="ml-4">On the third day he rose again;</p>
                  <p className="ml-4">he ascended into heaven,</p>
                  <p className="ml-4">is seated at the right hand of the Father,</p>
                  <p className="ml-4">and will come again to judge the living and the dead.</p>
                  <p className="mt-3">I believe in the Holy Spirit,</p>
                  <p className="ml-4">the holy catholic church,</p>
                  <p className="ml-4">the communion of saints,</p>
                  <p className="ml-4">the forgiveness of sins,</p>
                  <p className="ml-4">the resurrection of the body,</p>
                  <p className="ml-4">and the life everlasting. Amen.</p>
                </div>
              </div>

              {/* Nicene Creed */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">The Nicene Creed</h3>
                <div className="text-gray-700 leading-relaxed space-y-2 text-base">
                  <p>We believe in one God,</p>
                  <p className="ml-4">the Father, the Almighty,</p>
                  <p className="ml-4">maker of heaven and earth,</p>
                  <p className="ml-4">of all that is, seen and unseen.</p>
                  <p className="mt-3">We believe in one Lord, Jesus Christ,</p>
                  <p className="ml-4">the only Son of God,</p>
                  <p className="ml-4">eternally begotten of the Father,</p>
                  <p className="ml-4">God from God, Light from Light,</p>
                  <p className="ml-4">true God from true God,</p>
                  <p className="ml-4">begotten, not made,</p>
                  <p className="ml-4">of one Being with the Father;</p>
                  <p className="ml-4">through him all things were made.</p>
                  <p className="ml-4">For us and for our salvation</p>
                  <p className="ml-8">he came down from heaven,</p>
                  <p className="ml-8">was incarnate of the Holy Spirit and the Virgin Mary</p>
                  <p className="ml-8">and became truly human.</p>
                  <p className="ml-8">For our sake he was crucified under Pontius Pilate;</p>
                  <p className="ml-8">he suffered death and was buried.</p>
                  <p className="ml-8">On the third day he rose again</p>
                  <p className="ml-12">in accordance with the Scriptures;</p>
                  <p className="ml-8">he ascended into heaven</p>
                  <p className="ml-12">and is seated at the right hand of the Father.</p>
                  <p className="ml-8">He will come again in glory</p>
                  <p className="ml-12">to judge the living and the dead,</p>
                  <p className="ml-12">and his kingdom will have no end.</p>
                  <p className="mt-3">We believe in the Holy Spirit, the Lord, the giver of life,</p>
                  <p className="ml-4">who proceeds from the Father and the Son,</p>
                  <p className="ml-4">who with the Father and the Son</p>
                  <p className="ml-8">is worshiped and glorified,</p>
                  <p className="ml-4">who has spoken through the prophets.</p>
                  <p className="ml-4">We believe in one holy catholic and apostolic church.</p>
                  <p className="ml-4">We acknowledge one baptism</p>
                  <p className="ml-8">for the forgiveness of sins.</p>
                  <p className="ml-4">We look for the resurrection of the dead,</p>
                  <p className="ml-8">and the life of the world to come. Amen.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 italic">
                These ancient creeds, shared by Christians worldwide, express the core truths of
                our faith and connect us to believers throughout history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theological Diversity and Inclusion */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                A Church for All People
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Hopewell United Methodist Church, we believe that God's love is inclusive and
                  unconditional. While we hold firmly to the core tenets of Christian faith, we
                  also recognize that people of sincere faith may interpret some matters of
                  theology and practice differently.
                </p>
                <p>
                  We welcome people at all stages of their faith journey - from those who are
                  exploring Christianity for the first time to those who have walked with Christ
                  for decades. We believe that Christian community is enriched by diverse
                  perspectives and experiences.
                </p>
                <p>
                  Our doors are open to all who seek God, regardless of background, ethnicity,
                  economic status, or where you are in your spiritual journey. We strive to be a
                  place where questions are welcomed, doubts are honored, and all people can
                  encounter the transforming love of Jesus Christ.
                </p>
                <p className="font-semibold text-[#0b5a7f] text-center text-xl mt-8">
                  "In essentials, unity; in non-essentials, liberty; in all things, charity."
                </p>
                <p className="text-center text-gray-600 italic">
                  - A motto often attributed to early Methodist leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* United Methodist Resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Learn More About United Methodist Beliefs
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* UMC Official Resources */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">Official UMC Resources</h3>
                <p className="text-gray-700 mb-4">
                  Explore the official United Methodist Church website for comprehensive
                  information about our denomination's beliefs, history, and global mission.
                </p>
                <a
                  href="https://www.umc.org/en/what-we-believe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b5a7f] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Visit UMC.org →
                </a>
              </div>

              {/* Book of Discipline */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">The Book of Discipline</h3>
                <p className="text-gray-700 mb-4">
                  The official book of doctrine and polity for the United Methodist Church,
                  containing our theological statements and organizational structure.
                </p>
                <a
                  href="https://www.umc.org/en/content/book-of-discipline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b5a7f] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Learn More →
                </a>
              </div>

              {/* Articles of Religion */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">Articles of Religion</h3>
                <p className="text-gray-700 mb-4">
                  Our historic doctrinal standards, adapted from the Church of England by John
                  Wesley for the Methodist movement in America.
                </p>
                <a
                  href="https://www.umc.org/en/content/articles-of-religion-of-the-methodist-church"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b5a7f] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Read the Articles →
                </a>
              </div>

              {/* Social Principles */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">Social Principles</h3>
                <p className="text-gray-700 mb-4">
                  Our church's stance on contemporary social issues, rooting our call to social
                  justice in our theological convictions.
                </p>
                <a
                  href="https://www.umc.org/en/content/social-principles-the-united-methodist-church"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b5a7f] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Explore Social Principles →
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-[#0b5a7f] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Have Questions About Our Beliefs?</h3>
              <p className="text-lg mb-6">
                We'd love to talk with you about faith, theology, and what it means to follow
                Jesus in the Methodist tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/connect"
                  className="inline-block bg-white text-[#0b5a7f] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about/visit"
                  className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Plan a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
