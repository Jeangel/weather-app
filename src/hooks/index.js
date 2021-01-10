import { useState, useEffect, useCallback } from 'react'
import _ from 'lodash'

/**
 * Given an array of strings it will be returned a text written
 * char by char with a random delay given the speed in the options arg.
 * @param {string[]} texts
 * @param {{
 *  minSpeed?: number,
 *  maxSpeed?: number
 * }} [options]
 */
export const useTypewriter = (texts = [], options = {}) => {
  const { minSpeed = 50, maxSpeed = minSpeed * 4 } = options
  // Contains the index position we're right now in the current text.
  const [charIndex, setCharIndex] = useState(0)
  // Contains the index position we're right now in the texts array.
  const [itemIndex, setItemIndex] = useState(0)
  // Contains the text we're building.
  const [finalText, setFinalText] = useState('')
  // Contains if we're currently removing a character.
  const [isRemoving, setIsRemoving] = useState(false)
  // Contains if we're currently writing a character.
  const [isWriting, setIsWriting] = useState(false)
  // Contains if we have finished writing a text.
  const [hasFinishedWritingTheText, setHasFinishedWritingTheText] = useState(false)
  // Contains if we have finished removing a text.
  const [hasFinishedRemovingTheText, setHasFinishedRemovingTheText] = useState(true)

  /**
   * Returns the current text from the given `texts` array.
   * @returns {string} current text.
   */
  const getCurrentText = useCallback(() => {
    const text = texts[itemIndex]
    if (_.isUndefined(text)) {
      return ''
    }
    return text
  }, [texts, itemIndex])

  /**
   * Returns a random speed value based on the `minSpeed`/`maxSpeed`.
   * @returns {number} speed.
   */
  const getRandomSpeed = useCallback(() => {
    return _.random(minSpeed, maxSpeed)
  }, [minSpeed, maxSpeed])

  /**
   * Contains all the logic to print the following character
   * of the current text.
   */
  const printNextCharacter = useCallback(() => {
    /**
     * If for some reason a function is writing or removing
     * let's cancel the operation.
     */
    if (isWriting || isRemoving) {
      return false
    }
    const currentText = getCurrentText()
    const nextCharacter = currentText[charIndex]
    /**
     * Again, if there is no more characters in the text or if 
     * there is no more texts in the current index, cancel the operation.
     */
    if (!nextCharacter || !currentText) {
      return false
    }
    setIsWriting(true)
    setTimeout(() => {
      const nextCharIndex = charIndex + 1
      setFinalText(finalText.concat(nextCharacter))
      setCharIndex(nextCharIndex)
      setIsWriting(false)
      const hasReachedTheEndOfTheText = currentText.length === nextCharIndex
      if (hasReachedTheEndOfTheText) {
        setHasFinishedWritingTheText(true)
        setTimeout(() => {
          setHasFinishedRemovingTheText(false)
        }, 1000);
      }
    }, getRandomSpeed())
  }, [isWriting, isRemoving, getRandomSpeed, charIndex, getCurrentText, finalText])

  /**
   * Contains all the logic to remove the following character
   * of the current text.
   */
  const removeNextCharacter = useCallback(() => {
    /**
     * If for some reason a function is writing or removing
     * let's cancel the operation.
     */
    if (isWriting || isRemoving) {
      return false
    }
    const currentText = getCurrentText()
    const nextCharacter = currentText[charIndex - 1]
    /**
     * Again, if there is no more characters in the text or if 
     * there is no more texts in the current index, cancel the operation.
     */
    if (!nextCharacter || !currentText) {
      return false
    }
    setIsRemoving(true)
    setTimeout(() => {
      const nextCharIndex = charIndex -1
      setFinalText(finalText.slice(0, -1))
      setCharIndex(nextCharIndex)
      setIsRemoving(false)
      const hasReachedTheStartOfTheText = nextCharIndex === 0
      if (hasReachedTheStartOfTheText) {
        /**
         * If we've completed the whole texts array, let's start again,
         * otherwise keep moving.
         */
        setItemIndex(itemIndex === texts.length -1 ? 0 : itemIndex + 1)
        setHasFinishedWritingTheText(false)
        setHasFinishedRemovingTheText(true)
        setCharIndex(0)
      }
    }, getRandomSpeed())
  }, [isWriting, texts, isRemoving, getRandomSpeed, charIndex, getCurrentText, finalText, itemIndex])

  useEffect(() => {
    const currentText = getCurrentText()
    if (currentText) {
      if (!hasFinishedRemovingTheText) {
        removeNextCharacter()
      } else if (!hasFinishedWritingTheText) {
        printNextCharacter()
      }
    }
  }, [getCurrentText, removeNextCharacter, printNextCharacter, hasFinishedRemovingTheText, hasFinishedWritingTheText])
  return finalText
}