import { useState } from "react";
import "./ResearchCard.css";

export default function ResearchCard({
  title,
  briefDescription,
  detailedDescription,
  image,
  imageAlt,
  video,
  gif,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Fixed character limit for the preview text
  const PREVIEW_LENGTH = 600;

  // Get the preview text (truncated to PREVIEW_LENGTH)
  const getPreviewText = () => {
    if (!briefDescription) return "";
    if (briefDescription.length <= PREVIEW_LENGTH) {
      return briefDescription;
    }
    const truncated = briefDescription.substring(0, PREVIEW_LENGTH);
    const lastSpace = truncated.lastIndexOf(" ");
    return lastSpace > 0 ? briefDescription.substring(0, lastSpace) : truncated;
  };

  const previewText = getPreviewText();
  const hasMoreText =
    (briefDescription && briefDescription.length > PREVIEW_LENGTH) ||
    (detailedDescription && detailedDescription.trim().length > 0);

  // Split detailed description into paragraphs by \n\n
  const getDetailedParagraphs = () => {
    if (!detailedDescription) return [];
    return detailedDescription
      .split("\n\n")
      .filter((para) => para.trim().length > 0);
  };

  const detailedParagraphs = getDetailedParagraphs();

  return (
    <div className="research-card">
      <div className="research-card-content">
        <h2 className="research-card-title">{title}</h2>
        <div className="research-card-description-image">
          <div className="research-card-description-wrapper">
            <p className="research-card-description">
              {previewText}
              {hasMoreText && !isExpanded && (
                <button
                  className="read-more-button"
                  onClick={() => setIsExpanded(true)}
                >
                  ... read more
                </button>
              )}
              {isExpanded &&
                briefDescription &&
                briefDescription.length > PREVIEW_LENGTH && (
                  <span className="remaining-text">
                    {" "}
                    {briefDescription.substring(previewText.length).trim()}
                  </span>
                )}
            </p>
            <div
              className={`expandable-content ${
                isExpanded ? "expanded" : "collapsed"
              }`}
            >
              {detailedParagraphs.length > 0 && (
                <>
                  {detailedParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="research-card-description detailed"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
                </>
              )}
            </div>
            {isExpanded && (
              <button
                className="read-more-button"
                onClick={() => setIsExpanded(false)}
              >
                read less
              </button>
            )}
          </div>
          {(image || video || gif) && (
            <div className="research-card-image">
              {video ? (
                <video src={video} controls>
                  Your browser does not support the video tag.
                </video>
              ) : gif ? (
                <img src={gif} alt={imageAlt || title} />
              ) : (
                <img src={image} alt={imageAlt || title} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
