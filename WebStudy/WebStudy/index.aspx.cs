using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Data.SqlClient;
using System.Data;
using System.Text;

namespace WebStudy
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
       
        [WebMethod]
        public static string[] electric_flu()//电流波动
        {
            string[] a = { "a", "5", "b", "3", "c", "5" };
            return a;

        }
        [WebMethod]
        public static string[] tableData()
        { 

            DataTable dt=new DataTable();
            string strSql = "SELECT [level],[data],[time],[solution] FROM [dbo].[YJ]";
            dt = Query(strSql);
            string[] array = new string[dt.Rows.Count * dt.Columns.Count];
            for (int i = 0; i < dt.Rows.Count;i++ )
            {
                for(int j=0;j<dt.Columns.Count;j++)
                {
                    array[i * dt.Columns.Count + j] = dt.Rows[i][j].ToString();
                }
            }
                return array;
        }
        [WebMethod]
        public static string  gaugeData()
        {
            DataTable dt = new DataTable();
            string strSql = "SELECT [value]FROM [dbo].[gauge_data]";
            dt = Query(strSql);
            string array = dt.Rows.Count.ToString();
            
                return array;
        }

        [WebMethod]
        public static string[] pieData1()
        {
            string[] array = new string[3];
            string[] strSql = { "SELECT [level]  FROM [dbo].[gauge_data]  where level='低级'", 
                                  "SELECT [level]  FROM [dbo].[gauge_data]  where level='中级'",
                                  "SELECT [level]  FROM [dbo].[gauge_data]  where level='高级'" };
            for(int i=0;i<3;i++)
            {
                DataTable dt = new DataTable();                
                dt = Query(strSql[i]);
                array[i] = dt.Rows.Count.ToString();
            }                                  
            return array;
        }
        [WebMethod]
        public static string[] pieData2()
        {
            string[] array = new string[2];
            string[] strSql = { "SELECT [level]  FROM [dbo].[gauge_data]",                             
                                  "SELECT [level]  FROM [dbo].[gauge_data]  where level='高级'" };
            for (int i = 0; i < 2; i++)
            {
                DataTable dt = new DataTable();
                dt = Query(strSql[i]);
                array[i] = dt.Rows.Count.ToString();
            }
            return array;
        }
       
        [WebMethod]
        public static string[] barData1()//返回一维数组
        {
            DataTable dt = new DataTable();
            string strSql = "SELECT [name],[wl],[nl],[fy]FROM [dbo].[CH]";
            dt = Query(strSql);   
            string[]array=new string[dt.Rows.Count*dt.Columns.Count];
            for (int i = 0; i < dt.Rows.Count;i++ )
            {
                for(int j=0;j<dt.Columns.Count;j++)
                {
                    array[i*dt.Columns.Count+j] = dt.Rows[i][j].ToString();
                }
            }

                return array;
           
        }

        [WebMethod]
        public static string barData()//将查询到的数据表返回成一个JSON字符串
        {
            DataTable dt = new DataTable();
            string strSql = "SELECT [name] ,[data] FROM [dbo].[quality]";
            dt = Query(strSql);
            string  a = DataTableToJson(dt);
            return a;
           
        }
        
        [WebMethod]
        public static string DataTableToJson(DataTable table)//将数据表转换成JSON字符串
        {
            var JsonString = new StringBuilder();
            if (table.Rows.Count > 0)
            {
                JsonString.Append("[");
                for (int i = 0; i < table.Rows.Count; i++)
                {
                    JsonString.Append("{");
                    for (int j = 0; j < table.Columns.Count; j++)
                    {
                        if (j < table.Columns.Count - 1)
                        {
                            JsonString.Append("\"" + table.Columns[j].ColumnName.ToString() + "\":" + "\"" + table.Rows[i][j].ToString() + "\",");
                        }
                        else if (j == table.Columns.Count - 1)
                        {
                            JsonString.Append("\"" + table.Columns[j].ColumnName.ToString() + "\":" + "\"" + table.Rows[i][j].ToString() + "\"");
                        }
                    }
                    if (i == table.Rows.Count - 1)
                    {
                        JsonString.Append("}");
                    }
                    else
                    {
                        JsonString.Append("},");
                    }
                }
                JsonString.Append("]");
            }
            return JsonString.ToString();
           
        }

        [WebMethod]
        public static string[] barData2()//使用一维数组进行传值，返回一个一维数组
        {
            DataTable dt = new DataTable();
            string strSql = "SELECT [name] ,[data] FROM [dbo].[quality]";           
            dt = Query(strSql);

            string[] array = new string[dt.Rows.Count * dt.Columns.Count];
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                 for (int j = 0; j < dt.Columns.Count; j++)
                 {
                     array[i * dt.Columns.Count + j] = dt.Rows[i][j].ToString();
                 }
              
            }
           
            return array;

        }
       
        [WebMethod]
        public static string[,] barData22()//使用二维数组进行传值，返回一个二维数组
        {
            DataTable dt = new DataTable();
            string strSql = "SELECT [name] ,[data] FROM [dbo].[quality]";
            dt = Query(strSql);

            string[,] array = new string[dt.Columns.Count, dt.Rows.Count];
            for (int i = 0; i < dt.Columns.Count; i++)
            {
                for (int j = 0; j < dt.Rows.Count; j++)
                 {
                       array[i,j] = dt.Rows[j][i].ToString();
                 }              
            }           
            return array;
        }

        [WebMethod]
       
       public static double[,] lineData()
        {
            DataTable dt = new DataTable();           
            string strSql = "SELECT [name] ,[isUse] FROM [dbo].[line]";
            dt=Query(strSql);
            int j;
            
            int sum_data = dt.Rows.Count;//数据表的行数，也就是总的数据数
           // Console.WriteLine(sum_data);
            int xdata_gap = sum_data / 5;//计算每个间隔的数
           // Console.WriteLine(xdata_gap);
           // int xdata_gap1 = sum_data % 5;//最后的余数
           // Console.WriteLine(xdata_gap1);
            int sum_gap = xdata_gap + 1;//横坐标一共被分成多少段
           // Console.WriteLine(sum_gap);
            double[,] array = new double[2, sum_gap];//创建空的数组，为了存放x坐标轴数据和计算好的利用率
            int[] data_number = new int[sum_gap];//存放id前有多少条被利用的数据
            for(int i=0;i<sum_gap-1;i++)
            {
                              
                data_number[i] = Query1((i+1)*5) ;
               
               
            }
           
            data_number[sum_gap-1] = Query1(sum_data);
            for (int a = 0; a < sum_gap-1;a++ )
            {
                array[0,a] = (a+1)*5;
                array[1, a] = Math.Round((Convert.ToDouble(data_number[a]) / (5.00 * (a + 1))) * 100,2);
            }
                array[0,sum_gap-1]=sum_data;
                array[1, sum_gap - 1] = Math.Round((Convert.ToDouble(data_number[sum_gap-1]) / sum_data)*100,2);
                return array;
        }
        [WebMethod]
        public static int Query1(int id1)//连接数据库，查询前id条isUse='y'的信息的条数
        {
            string connectionString = "Data Source=.;Initial Catalog=test;Integrated Security=True;";//连接地址
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                DataSet ds = new DataSet();
                try
                {
                    connection.Open();
                    SqlCommand sqlCom = new SqlCommand();
                    sqlCom.Connection = connection;
                    
                    sqlCom.CommandText = "SELECT [id],[name] ,[isUse] FROM [dbo].[line] where [isUse]='y' and [id]<="+id1;                  
                    string strSql=sqlCom.CommandText;
                    SqlDataAdapter command = new SqlDataAdapter(strSql, connection);
                    command.Fill(ds, "ds");
                }
                catch (System.Data.SqlClient.SqlException ex)
                {
                    throw new Exception(ex.Message);
                }
                if (ds.Tables[0] != null)
                {
                    DataTable dt=new DataTable();
                    dt=ds.Tables[0];
                    return dt.Rows.Count;
                }
                    
                else
                    return 0;

            }
        }


        [WebMethod]
        public static int sum()
        {
            int sum=0;
            DataTable dt = new DataTable();
            string strSql = "SELECT [name] ,[isUse] FROM [dbo].[line]";
            dt = Query(strSql);
            sum = dt.Rows.Count;
            return sum;
        }

        [WebMethod]
        public static DataTable Query(string SQLString)//连接数据库，使用sql语句进行查询，返回第一个数据表，数据集为空则返回null
        {
            string connectionString = "Data Source=.;Initial Catalog=test;Integrated Security=True;";//连接地址
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                DataSet ds = new DataSet();
                try
                {
                    connection.Open();
                    SqlDataAdapter command = new SqlDataAdapter(SQLString, connection);
                    command.Fill(ds, "ds");
                }
                catch (System.Data.SqlClient.SqlException ex)
                {
                    throw new Exception(ex.Message);
                }
                if (ds.Tables[0] != null)
                    return ds.Tables[0];
                else
                    return null;
                
            }
        }
    }
}