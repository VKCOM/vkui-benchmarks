# VKUI - анализ производительности

## Сравнение с другими библиотеками (от 30 марта 2021г.)

### TLDR:

- на каждом фреймворке было сделано тестовое приложение, с 3 вариантами экранов
  - default - обычный экран с базовыми компонентами
  - burn (list) - экран с большим списком однотипных интерактивных элементов (500)
  - modals - экран с несколькими открытыми модалками
- VKUI по показателям +/- на одном уровне с другими библиотеками, сильных просадок, как и сильного превосходства нет
- Одно из явных проблематичных мест — вложенные Tappable протестированы на большом списке, единственная библиотека в которой есть аналогичный кейс это Material-UI, и VKUI сильно обходит ее по производительности ([детали](#vkui-430-vs-mui))

### Детальный отчет:

> **Замеры проводятся в LH с конфигурацией по-умолчанию, desktop preset:**
> **CPU throttling:** 1x slowdown (Simulated)
> **Network throttling:** 40 ms TCP RTT, 10,240 Kbps throughput (Simulated)
> ~ сопоставимо с уровнем флагманского Android устройства
> 
> В сторонних приложениях был упор на использование максимально схожих компонентов как у VKUI.
> 
> [Последний отчёт](https://github.com/VKCOM/vkui-benchmarks/issues/111)

**Библиотеки использованные для сравнения:**

| Название библиотеки | Сайт/репозиторий библиотеки              |
| ------------------- | ---------------------------------------- |
| VKUI                | https://github.com/VKCOM/VKUI            |
| Material UI         | https://material-ui.com/                 |
| Yandex UI           | https://github.com/bem/yandex-ui         |
| Fluent UI           | https://github.com/microsoft/fluentui    |
| Lightning           | https://react.lightningdesignsystem.com/ |
| Adobe Spectrum      | https://react-spectrum.adobe.com/        |
| Ant Design          | https://ant.design/                      |
| Framework7          | https://framework7.io                    |

#### `vkui (4.3.0)` vs `ant`:

| **app**      | **type (app link)**                                    | **report**                                                                                                             | **performance** |
| ------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| vkui (4.3.0) | [default](https://vkui-benchmark.surge.sh/)            | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105308901-29539.report.html) | 0.99            |
| ant          | [default](https://ant-benchmark.surge.sh/)             | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105700913-56791.report.html) | 0.99            |
| vkui (4.3.0) | [modals](https://vkui-benchmark.surge.sh/?mode=modals) | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309152-55536.report.html) | 1 🟢            |
| ant          | [modals](https://ant-benchmark.surge.sh/?mode=modals)  | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105701260-75242.report.html) | 0.99            |
| vkui (4.3.0) | [list](https://vkui-benchmark.surge.sh/?mode=burn)     | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309810-58632.report.html) | 0.94 🟢         |
| ant          | [list](https://ant-benchmark.surge.sh/?mode=burn)      | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105701703-37242.report.html) | 0.89            |

> list:
> ant не имеет схожего по сложности компонента для отрисовки сложных списков

#### `vkui (4.3.0)` vs `f7`:

| **app**      | **type (app link)**                                    | **report**                                                                                                             | **performance** |
| ------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| vkui (4.3.0) | [default](https://vkui-benchmark.surge.sh/)            | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105308901-29539.report.html) | 0.99 🟢         |
| f7           | [default](https://f7-benchmark.surge.sh/)              | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105498795-62940.report.html) | 0.98            |
| vkui (4.3.0) | [modals](https://vkui-benchmark.surge.sh/?mode=modals) | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309152-55536.report.html) | 1 🟢            |
| f7           | [modals](https://f7-benchmark.surge.sh/?mode=modals)   | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105499301-52915.report.html) | 0.99            |
| vkui (4.3.0) | [list](https://vkui-benchmark.surge.sh/?mode=burn)     | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309810-58632.report.html) | 0.94 🟢         |
| f7           | [list](https://f7-benchmark.surge.sh/?mode=burn)       | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105499537-62801.report.html) | 0.92            |

> list:
> Framework7 не позволяет вложить одновременно checkbox и radio в компонент списка (List)

#### `vkui (4.3.0)` vs `fluent`:

| **app**      | **type (app link)**                                      | **report**                                                                                                             | **performance** |
| ------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| vkui (4.3.0) | [default](https://vkui-benchmark.surge.sh/)              | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105308901-29539.report.html) | 0.99 🟢         |
| fluent       | [default](https://fluent-benchmark.surge.sh/)            | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105757896-96667.report.html) | 0.94            |
| vkui (4.3.0) | [modals](https://vkui-benchmark.surge.sh/?mode=modals)   | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309152-55536.report.html) | 1 🟢            |
| fluent       | [modals](https://fluent-benchmark.surge.sh/?mode=modals) | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105758143-48857.report.html) | 0.99            |
| vkui (4.3.0) | [list](https://vkui-benchmark.surge.sh/?mode=burn)       | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309810-58632.report.html) | 0.94 🔴         |
| fluent       | [list](https://fluent-benchmark.surge.sh/?mode=burn)     | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105758503-53308.report.html) | 0.97            |

> modals:
> Разница на уровне погрешности
>
> list:
> Fluent не имеет схожего по сложности компонента для отрисовки сложных списков

#### `vkui (4.3.0)` vs `lightning`:

| **app**      | **type (app link)**                                         | **report**                                                                                                             | **performance** |
| ------------ | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| vkui (4.3.0) | [default](https://vkui-benchmark.surge.sh/)                 | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105308901-29539.report.html) | 0.99 🟢         |
| lightning    | [default](https://lightning-benchmark.surge.sh/)            | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105615898-23760.report.html) | 0.95            |
| vkui (4.3.0) | [modals](https://vkui-benchmark.surge.sh/?mode=modals)      | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309152-55536.report.html) | 1               |
| lightning    | [modals](https://lightning-benchmark.surge.sh/?mode=modals) | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105616205-87599.report.html) | 1               |
| vkui (4.3.0) | [list](https://vkui-benchmark.surge.sh/?mode=burn)          | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309810-58632.report.html) | 0.94 🔴         |
| lightning    | [list](https://lightning-benchmark.surge.sh/?mode=burn)     | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105616599-17930.report.html) | 0.99            |

> list:
> Lightning не имеет схожего по сложности компонента для отрисовки сложных списков

#### `vkui (4.3.0)` vs `mui`:

| **app**      | **type (app link)**                                    | **report**                                                                                                             | **performance** |
| ------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| vkui (4.3.0) | [default](https://vkui-benchmark.surge.sh/)            | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105308901-29539.report.html) | 0.99 🟢         |
| mui          | [default](https://mui-benchmark.surge.sh/)             | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105391499-9644.report.html)  | 0.93            |
| vkui (4.3.0) | [modals](https://vkui-benchmark.surge.sh/?mode=modals) | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309152-55536.report.html) | 1 🟢            |
| mui          | [modals](https://mui-benchmark.surge.sh/?mode=modals)  | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105391998-86751.report.html) | 0.96            |
| vkui (4.3.0) | [list](https://vkui-benchmark.surge.sh/?mode=burn)     | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309810-58632.report.html) | 0.94 🟢         |
| mui          | [list](https://mui-benchmark.surge.sh/?mode=burn)      | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105392597-64639.report.html) | 0.77            |

> default и modals:
> Разница незначительная, из-за более длительного First Contentful Paint.
> 
> list:
> При примерно одинаковой загруженности списков в material-ui и VKUI, Average Render Time выигрывает в нашу пользу почти в **три раза**.
> 
> (~1328,6ms в material-ui vs ~476,4ms в VKUI)
![List в material-ui](https://paper-attachments.dropbox.com/s_225144D9FF9B7C6951E6039B4197E180AAAE9434A133852CB400146718BE285A_1616084901718_image.png)
![Cell в VKUI](https://paper-attachments.dropbox.com/s_225144D9FF9B7C6951E6039B4197E180AAAE9434A133852CB400146718BE285A_1616084936142_image.png)


#### `vkui (4.3.0)` vs `spectrum`:

| **app**      | **type (app link)**                                        | **report**                                                                                                             | **performance** |
| ------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| vkui (4.3.0) | [default](https://vkui-benchmark.surge.sh/)                | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105308901-29539.report.html) | 0.99            |
| spectrum     | [default](https://spectrum-benchmark.surge.sh/)            | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105550908-44853.report.html) | 0.99            |
| vkui (4.3.0) | [modals](https://vkui-benchmark.surge.sh/?mode=modals)     | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309152-55536.report.html) | 1               |
| spectrum     | [modals](https://spectrum-benchmark.surge.sh/?mode=modals) | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105551282-96805.report.html) | 1               |
| vkui (4.3.0) | [list](https://vkui-benchmark.surge.sh/?mode=burn)         | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309810-58632.report.html) | 0.94 🔴         |
| spectrum     | [list](https://spectrum-benchmark.surge.sh/?mode=burn)     | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105551698-6538.report.html)  | 1               |

> list:
> Spectrum не имеет схожего по сложности компонента для отрисовки сложных списков

#### `vkui (4.3.0)` vs `yandex`:

| **app**      | **type (app link)**                                      | **report**                                                                                                             | **performance** |
| ------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| vkui (4.3.0) | [default](https://vkui-benchmark.surge.sh/)              | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105308901-29539.report.html) | 0.99 🔴         |
| yandex       | [default](https://yandex-benchmark.surge.sh/)            | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105438505-54267.report.html) | 1               |
| vkui (4.3.0) | [modals](https://vkui-benchmark.surge.sh/?mode=modals)   | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309152-55536.report.html) | 1               |
| yandex       | [modals](https://yandex-benchmark.surge.sh/?mode=modals) | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105438917-30146.report.html) | 1               |
| vkui (4.3.0) | [list](https://vkui-benchmark.surge.sh/?mode=burn)       | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105309810-58632.report.html) | 0.94 🔴         |
| yandex       | [list](https://yandex-benchmark.surge.sh/?mode=burn)     | [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1617105439501-81010.report.html) | 1               |


> В первую очередь кажется, что yandex-ui не предназначен для сторонних разработчиков и этому способствует плохая документация.
> default:
> Разница на уровне погрешности
> 
> list:
> Yandex-UI не имеет схожего по сложности компонента для отрисовки сложных списков



## **Подводные камни**

В репортах у нас имеется показатель CPU/Memory Power, который не разительно, но отличается в зависимости от воркеров, которые нам может дать GitHub. Из-за этого имеются погрешности в пределах 0,01-0,03, о них нам известно и планируем их устранить.

**При 4x slowdown:**

- Мы местами обыгрываем и равняемся по показателям на material-ui;
- В странице с модальными окнами уделываем yandex-ui;
- Проигрываем/примерно равны Framework7, у него меньше элементов в DOM списков, но разницу создает невозможность корректно вложить в List одновременно radio и checkbox.

> CPU/Memory power может в этом кейсе весомо влиять на результаты

**Почему Lighthouse?**

Lighthouse - официальный инструмент для измерения [Web Vitals](https://web.dev/vitals/) и де-факто является стандартом индустрии для оценки производительности в вебе.

## **Что можно улучшить?**

- LH ругается на styles.css из VKUI из-за большого количества неиспользуемых стилей и они-же замедляют First Contentful Paint

![](https://paper-attachments.dropbox.com/s_225144D9FF9B7C6951E6039B4197E180AAAE9434A133852CB400146718BE285A_1615964582926_file.jpeg)

> Два CSS чанка, один из которых весит 27,5 Кб

Related:
[#1335](https://github.com/VKCOM/VKUI/pull/1335)


- Напрягает показатель Performance в списке с Cell из-за высокой нагруженности **Tappable**. В примере используется 500 одинаковых по сложности Cell: selectable, в before Avatar, в after IconButton, не disabled. 

> Важно отметить - CPU throttling при бенчмарке выкручен на 4x slowdown.  ~ На уровне бюджетно-среднего Android устройства.
![](https://paper-attachments.dropbox.com/s_225144D9FF9B7C6951E6039B4197E180AAAE9434A133852CB400146718BE285A_1616154975169_image.png)

> 4,2s до возможности использовать приложение. В реальных условиях 500 Cell не нужны, но для каких-нибудь приложений с бесконечными списками это может иметь явное значение (Юла, Работа ВК и пр.)

Related issues:
[#816](https://github.com/VKCOM/VKUI/issues/816), [#1442](https://github.com/VKCOM/VKUI/issues/1442), [#1443](https://github.com/VKCOM/VKUI/issues/1443)

- Можно добавить в наш [template](https://www.npmjs.com/package/@vkontakte/create-vk-mini-app) упаковку с помощью `compress-create-react-app`, большинство хостингов статики должны поддерживать передачу gzip, в Ubuntu 20.04 (nginx.conf) она включена по-умолчанию. Это довольно сильно влияет на показатель Performance в LH.

> Output после выполнения compress-cra
![](https://paper-attachments.dropbox.com/s_225144D9FF9B7C6951E6039B4197E180AAAE9434A133852CB400146718BE285A_1616394212881_image.png)

> Github Pages поддерживает gzip
![](https://paper-attachments.dropbox.com/s_225144D9FF9B7C6951E6039B4197E180AAAE9434A133852CB400146718BE285A_1616394601426_image.png)


## Версии пакетов

    "@vkontakte/icons": "^1.82.0",
    "@vkontakte/vk-bridge": "^2.4.0",
    "@vkontakte/vk-bridge-mock": "^2.1.0",
    "@vkontakte/vkjs": "^0.20.0",
    "@vkontakte/vkui": "4.3.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.2"

> На момент тестирования брались свежие версии библиотек

## Average Render Time

|      | Default  | Burn      | Modals  |
| ---- | -------- | --------- | ------- |
| VKUI | ~37,82ms | ~457,88ms | ~20,7ms |

> Production-profiling сборка, без троттлинга.
> Замеры проводились с помощью react-devtools, среднее арифметическое из 5 замеров.
