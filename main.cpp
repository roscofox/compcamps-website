

  #include <iostream>
  #include <string>
  #include <time.h>
  #include <stdlib.h>
  using namespace std;

  int lives = 5;
  int guess;
  int number;

  void levelOne();
  void levelTwo();
  void levelThree();

    int main ()
  {
    srand (time(NULL));
  number = rand() % 10 + 1;
  string name;
  cout << "What is your name user?" << endl;
  cin>>name;
  cout <<"Hello user " << name << endl;




  levelOne();


    return 0;
  }


bool guessing(int number)
{
  cout << "You have " << lives << " remaining" << endl;
  cout <<"Can you estamate this?" << endl;
  cin >> guess;
  lives--;

  do{

    if (guess > number) {
      cout << "You have " << lives << " remaining" << endl;
      cout << "Too great, guess again" << endl;
        cin >> guess;
        lives--;
    }


    if (guess < number) {
      cout << "You have " << lives << " remaining" << endl;
      cout << "Too low, guess again" << endl;
        cin >> guess;
        lives--;
    }



    if (guess == number) {
      cout << "AFFIRMATIVE" << endl;
      lives+= 2;
      return true;
    }




  }while(lives > 0);

  cout << "YOU HAVE BEEN TERMINATED..." << endl;

  return false;
  }

  void levelOne()
{
  cout <<"I am calulating of a number between 1-10" << endl;
    number = rand() % 10 + 1;
  if (guessing(number)) {
      levelTwo();
  }
}

  void levelTwo()
  {
    cout << "ACCESS GRANTED TO LEVEL TWO..." << endl;
    cout << "I am calulating a number between 1-15" << endl;
    number = rand() % 15 + 1;
    if (guessing(number)) {
      levelThree();
    }
  }

void levelThree()
{
  cout << "ACCESS GRANTED TO LEVEL THREE..." << endl;
  cout << "I am calulating a number between 1-20" << endl;
  number = rand() % 20 + 1;
  if (guessing(number)) {
    cout << "You have passed..." << endl;
  }
}
