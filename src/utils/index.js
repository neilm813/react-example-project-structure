/* 
It's common to not see an index file in some folders like the utils folder,
but here's another example of how an index file can be used. This exports
every util function from every file without directly so it's not nested
to make it easy for a single import statement to get any util from any file.
*/
export * from './constants';
export * from './randomizers';
export * from './unitConversions';

/* 
This also makes it possible to use one import to import all utils needed,
but they would be imported each as an object containing that files utils which
makes it harder to import just 1 or 2 functions from a utils file since you
can't destructure with the import keyword without importing the whole file then
destructuring on the next line.
*/
// export * as constants from './constants';
// export * as randomizers from './randomizers';
// export * as unitConversions from './unitConversions';
