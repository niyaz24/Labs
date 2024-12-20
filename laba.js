A = [0, 1]; B = [0, 1];
function and(A,B) {
    // Заголовки таблицы
    console.log("A\tB\tA AND B");
    console.log("---------------------");

    // Вложенные циклы для перебора всех комбинаций
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            // Вычисляем результат логического И
            var result = A[i] && B[j] ? 1 : 0; // Преобразуем результат в 0 или 1
            // Выводим результаты
            console.log(A[i] + "\t" + B[j] + "\t" + result);
        }
    }
}

// Вызов функции
and(A,B);

// Сортировка пузырком
function BubbleSort(arr1) {
    let n = arr1.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                // Меняем местами
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
                displayArray1(arr1); // Выводим текущее состояние массива после каждой перестановки
            }
        }
    }
    return arr1;
}

// Функция для отображения текущего состояния массива
function displayArray1(arr) {
    const resultDiv = document.getElementById('result1');
    resultDiv.innerHTML += arr.join(', ') + '<br>'; // Добавляем текущее состояние массива
}

function DisplayArra1() {
    const input = document.getElementById('Array1').value;
    const array = input.split(',').map(Number); // Разделяем строку и преобразуем в массив чисел
    if (array.length === 0 || array.some(isNaN)) {
        document.getElementById('result1').innerText = 'Введите корректные числа!';
        return;
    }
    document.getElementById('result1').innerHTML = ''; // Очищаем предыдущий результат
    const sortedArray = BubbleSort(array); // Сортируем массив
    document.getElementById('result1').innerHTML += 'Отсортированный массив: ' + sortedArray.join(', '); // Выводим результат
}

// Обработчик события для кнопки
document.getElementById('send_Array1').addEventListener('click', DisplayArra1);

// Обработчик события для нажатия клавиши в поле ввода
document.getElementById('Array1').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        DisplayArra1(); // Вызываем сортировку при нажатии Enter
    }
});


// Функция сортировки вставками
function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        // Сдвигаем элементы, которые больше ключа, на одну позицию вперед
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        displayArray(arr); // Выводим текущее состояние массива после вставки
    }
    return arr;
}

// Функция для отображения текущего состояния массива
function displayArray(arr) {
    const resultDiv = document.getElementById('result2');
    resultDiv.innerHTML += arr.join(', ') + '<br>'; // Добавляем текущее состояние массива
}

function sortArray2() {
    const input = document.getElementById('Array2').value;
    const array = input.split(',').map(Number); // Преобразуем строку в массив чисел
    if (array.length === 0 || array.some(isNaN)) {
        document.getElementById('result2').innerText = 'Введите корректные числа!';
        return;
    }
    document.getElementById('result2').innerHTML = ''; // Очищаем предыдущий результат
    const sortedArray = insertionSort(array); // Сортируем массив
    document.getElementById('result2').innerHTML += 'Отсортированный массив: ' + sortedArray.join(', '); // Отображение результата
}

// Обработчик события для кнопки
document.getElementById('send_Array2').addEventListener('click', sortArray2);

// Обработчик события для нажатия клавиши в поле ввода
document.getElementById('Array2').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortArray2(); // Вызываем сортировку при нажатии Enter
    }
});




// Функция быстрой сортировки
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1]; // Берем последний элемент в качестве опорного
    const left = []; // Массив для элементов меньше опорного
    const right = []; // Массив для элементов больше опорного
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Вывод текущего состояния массива перед рекурсией
    displayArray3([...left, pivot, ...right]);

    // Рекурсивно сортируем подмассивы и объединяем их с опорным элементом
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Функция для отображения текущего состояния массива
function displayArray3(arr) {
    const resultDiv = document.getElementById('result3');
    resultDiv.innerHTML += arr.join(', ') + '<br>'; // Добавляем текущее состояние массива
}

function sortArray3() {
    const input = document.getElementById('Array3').value;
    const array = input.split(',').map(Number).filter(num => !isNaN(num)); // Преобразование ввода в массив чисел
    if (array.length === 0) {
        document.getElementById('result3').innerText = 'Введите корректные числа!';
        return;
    }
    document.getElementById('result3').innerHTML = ''; // Очищаем предыдущий результат
    const sortedArray = quickSort(array); // Сортировка массива
    document.getElementById('result3').innerHTML += 'Отсортированный массив: ' + sortedArray.join(', '); // Отображение результата
}

// Обработчик событий для кнопки
document.getElementById('send_Array3').addEventListener('click', sortArray3);

// Обработчик событий для клавиши Enter
document.getElementById('Array3').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortArray3();
    }
});

// Функция сортировки выбором
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Обмен значениями
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        displayArray4(arr); // Выводим текущее состояние массива после каждой итерации внешнего цикла
    }
    return arr;
}

function displayArray4(arr) {
    const resultDiv = document.getElementById('result4');
    resultDiv.innerHTML += arr.join(', ') + '<br>'; // Добавляем текущее состояние массива
}

function sortArray4() {
    const input = document.getElementById('Array4').value;
    const array = input.split(',').map(Number);
    document.getElementById('result4').innerHTML = ''; // Очищаем предыдущий результат
    const sortedArray = selectionSort(array);
    document.getElementById('result4').innerHTML += 'Отсортированный массив: ' + sortedArray.join(', ');
}

document.getElementById('send_Array4').addEventListener('click', sortArray4);

// Обработчик события нажатия клавиши
document.getElementById('Array4').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortArray4();
    }
});

//Функция сортировки слиянием
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    const merged = merge(left, right);
    displayArray5(merged); // Выводим текущий массив после слияния
    return merged;
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function displayArray5(arr) {
    const resultDiv = document.getElementById('result5');
    resultDiv.innerHTML += arr.join(', ') + '<br>'; // Добавляем текущее состояние массива
}

function sortArray5() {
    const input = document.getElementById('Array5').value;
    const array = input.split(',').map(Number);
    document.getElementById('result5').innerHTML = ''; // Очищаем предыдущий результат
    const sortedArray = mergeSort(array); // Сортируем массив и получаем отсортированный результат
    // Выводим окончательный отсортированный массив
    document.getElementById('result5').innerHTML += 'Отсортированный массив: ' + sortedArray.join(', ');
}

document.getElementById('send_Array5').addEventListener('click', sortArray5);

// Обработчик события нажатия клавиши
document.getElementById('Array5').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortArray5();
    }
});

