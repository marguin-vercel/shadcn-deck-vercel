// Main export file for the presentation system
// This file simplifies imports by providing a single entry point

// Core components
export { Deck } from './core/deck';
export { Slide } from './core/slide';
export { useDeck } from './core/deck-context';

// Typography components
export { Heading } from './elements/typography/heading';
export { Text } from './elements/typography/text';
export { BlockQuote } from './elements/typography/quote';

// Layout components
export { Grid } from './layout/grid';
export { Box } from './layout/box';
export { Card } from '../presentation/card';

// List components
export { List, ListItem } from './elements/list';

// Media components
export { Image } from './media/image';
export { Code } from './media/code';
export { CodeServer } from './media/code-server';
