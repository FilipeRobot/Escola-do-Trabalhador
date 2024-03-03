using Escrever_meu_primeiro_código_CSharp.Aula;
using Escrever_meu_primeiro_código_CSharp.Exec;
using System.Runtime.CompilerServices;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("============================");

        //Aula();

        Exec();

        
        Console.WriteLine("\n\n============================");
    }

    private static void Aula()
    {
        Modulo01.Run();
    }

    private static void Exec()
    {
        Modulo01_Exec.Run();
    }
}