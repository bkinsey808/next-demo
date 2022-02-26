The reason we stub/mock CSS and images is because they aren't really important when we are running unit tests. But our code will still often import them and we need to mock their implementation to make our tests happy.

To mock images and styles, we can simply create two files to provide a dummy value whenever we encounter them.

see https://blog.jarrodwatts.com/how-to-set-up-nextjs-with-jest-react-testing-library-and-playwright
