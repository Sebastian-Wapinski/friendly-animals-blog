![screen of app](/assets/img/friendlyAnimalsBlog.png)

# Friendly Animals Blog

The content of the application consists of entries related to animals. By utilizing a headless CMS, the website administrator can conveniently add new entries and categories.

**Main features**:

- Use of Headless CMS – Prismic for managing entries and categories.
- Use of React Router for smoother navigation across the website.
- Filtering entries by date.
- Pagination.
- Managing page headers with React-Helmet-Async.
- Working on mobile devices and computers

&nbsp;

## ⚙️ Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

&nbsp;

## ✈️ Application Tour

### Desktop version

![](/assets/gif/url.gif) </br>
![](/assets/gif/friendlyAnimalsBlogAllPage.gif)

### Mobile version

![](/assets/gif/friendlyAnimalsBlogAllPageMobile.gif)

&nbsp;

## 💿 Installation

1. Clone the repository:

```
git clone [repository_url]
```

2. Navigate to the project directory:

```
cd [YOUR-REPO-NAME]
```

3. The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Having them installed, type into the terminal:

```
npm i
```

4. To start application, type into the terminal:

```
npm start
```

&nbsp;

## 💡 Solutions Provided In The Project

- Usage external api Prismic to menage content:

```
...
const { uid } = useParams()

const [document] = usePrismicDocumentByUID('post', uid)
...
```

- Implemented pagination for displaying content appropriately:

![](/assets/img/paginationRouting.png)

- Filtering data on click:

```
  const navigatedByDateChange = (e) => {
    const formElem = e.target.parentElement

    const { startDate: startFilteredDate } = formElem
    const { endDate: endFilteredDate } = formElem

    const startDateValue = startFilteredDate.value
    const endDateValue = endFilteredDate.value

    const navigationPath = `/${startDateValue}/${endDateValue}`

    navigateByDate(navigate, location, startDate, endDate, navigationPath)
  }

  const navigateByDate = (navigate, location, startDate, endDate, navigationPath = '') => {
  if (!!startDate === false && !!endDate === false) {
    const path = _sliceLastBackslash(location)
    navigate(`${path}/1${navigationPath}`)
  } else {
    const path = _sliceThreeLastBackslashes(location)
    navigate(`${path}/1${navigationPath}`)
  }
}
```

- Usage of React Router to navigate:

```
const App = () => {
  return (
    <>
      <ResetStyle />
      <StyledApp>
        <Routes>
          <Route
            path={'/'}
            element={<HomePage />}
          >
            <Route
              path={'/all-animals/:pageNum'}
              element={<AnimalsPage />}
            />
            <Route
              path={'/:animalType/:animalPageNum'}
              element={<AnimalTypePage />}
            />
            <Route
              path={'/all-animals/:pageNum/:startDate/:endDate'}
              element={<AnimalsPage />}
            />
            <Route
              path={'/:animalType/:animalPageNum/:startDate/:endDate'}
              element={<AnimalTypePage />}
            />
          </Route>
          <Route
            path={'/animal/:uid/:currentAnimal'}
            element={<CurrentAnimalPage />}
          />
          <Route
            path={'*'}
            element={<PageNotFound />}
          />
        </Routes>
      </StyledApp>
    </>
  )
}
```

&nbsp;

## 🙋‍♂️ Feel free to contact me

Thank you for investing your time. I hope you enjoyed exploring my project and have a pleasant experience testing it. For any inquiries, feel free to reach out to me via email at sebastian.pawel.wapinski@gmail.com.

&nbsp;

## 👏 Thanks

I am truly grateful for the guidance and support provided by my mentors. A heartfelt thank you to each of them for their invaluable contributions.

#### [Akademia Samouka](https://akademiasamouka.pl/) - Mateusz Bogolubow i Mateusz Choma

#### Mateusz Choma - [coderoad](https://coderoad.pl/)

#### Mateusz Bogolubow - [devmentor](https://devmentor.pl/)
