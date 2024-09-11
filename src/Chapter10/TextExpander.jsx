import { useState } from "react";
import PropTypes from "prop-types";

export default function Texts() {
  return (
    <div>
      <TextExpander>
        Leonhard Euler was a Swiss mathematician, physicist, astronomer,
        geographer, logician, and engineer who founded the studies of graph
        theory and topology and made pioneering and influential discoveries in
        many other branches of mathematics such as analytic number theory,
        complex analysis, and infinitesimal calculus. He introduced much of
        modern mathematical terminology and notation, including the notion of a
        mathematical function. He is also known for his work in mechanics, fluid
        dynamics, optics, astronomy, and music theory.
      </TextExpander>
      <TextExpander>
        Johann Carl Friedrich Gauss was a German mathematician, astronomer,
        geodesist, and physicist who contributed to many fields in mathematics
        and science. He was director of the Göttingen Observatory and professor
        of astronomy from 1807 until his death in 1855.
      </TextExpander>
      <TextExpander expand={true} className="">
        Sir Isaac Newton FRS was an English polymath active as a mathematician,
        physicist, astronomer, alchemist, theologian, and author who was
        described in his time as a natural philosopher. He was a key figure in
        the Scientific Revolution and the Enlightenment that followed. His
        pioneering book Philosophiæ Naturalis Principia Mathematica, first
        published in 1687, consolidated many previous results and established
        classical mechanics. Newton also made seminal contributions to optics,
        and shares credit with German mathematician Gottfried Wilhelm Leibniz
        for formulating infinitesimal calculus, though some say he developed
        calculus years before Leibniz.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collupsedNumWords = 20,
  expandButtonText = "show more",
  collupseButtonText = "show less",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collupsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button color={buttonColor} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collupseButtonText : expandButtonText}
      </button>
    </div>
  );
}

TextExpander.propTypes = {
  collupsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collupseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  buttonInline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
