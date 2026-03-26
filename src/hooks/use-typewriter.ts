import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // 更新ref但不触发effect
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;

    const startTyping = () => {
      setIsTyping(true);
      setDisplayedText("");
      index = 0;

      const typeNextChar = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          timeout = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          setIsComplete(true);
          onCompleteRef.current?.();
        }
      };

      typeNextChar();
    };

    if (delay > 0) {
      timeout = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, delay]); // 移除onComplete依赖

  return { displayedText, isTyping, isComplete };
}
